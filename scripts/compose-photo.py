#!/usr/bin/env python3
"""Compose public/photo.png: picture.png doodle drawn onto paperTape.png.

The doodle is scaled up so it is much taller than the torn paper and masked
with the paper's alpha, so its lower half is cut off by the paper's torn
bottom edge -- as if only the top part of the person was drawn.
"""

from PIL import Image, ImageChops

PAPER = "public/paperTape.png"
DOODLE = "public/picture.png"
OUT = "public/photo.png"

DOODLE_WIDTH_FRACTION = 0.43
TOP_PAD_FRACTION = 0.10
ALPHA_TOL = 25


def alpha_bbox(img):
    return img.getchannel("A").getbbox()


def fragment_image(img, tol=ALPHA_TOL):
    alpha = img.getchannel("A").point(lambda a: 255 if a >= tol else 0)
    bbox = alpha.getbbox()
    if bbox is None:
        return None, None
    return img.crop(bbox), bbox


def main():
    paper = Image.open(PAPER).convert("RGBA")
    sheet_bbox = alpha_bbox(paper)
    sheet = paper.crop(sheet_bbox)
    sw, sh = sheet.size

    doodle, _ = fragment_image(Image.open(DOODLE).convert("RGBA"))
    if doodle is None:
        raise SystemExit("doodle has no opaque content")
    dw, dh = doodle.size

    target_w = int(sw * DOODLE_WIDTH_FRACTION)
    target_h = int(dh * target_w / dw)
    doodle = doodle.resize((target_w, target_h), Image.LANCZOS)
    dw, dh = doodle.size

    x = (sw - dw) // 2
    y = int(sh * TOP_PAD_FRACTION)

    composite = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
    composite.paste(sheet, (0, 0), sheet)

    # draw the doodle, then let the paper's own alpha cut the ink at the tear
    ink_layer = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
    ink_layer.paste(doodle, (x, y), doodle)
    paper_mask = sheet.getchannel("A")
    masked_alpha = ImageChops.multiply(ink_layer.getchannel("A"), paper_mask)
    ink_layer.putalpha(masked_alpha)
    del doodle, paper_mask

    composite.alpha_composite(ink_layer)
    composite.save(OUT)
    print(f"wrote {OUT}: {composite.size}")


if __name__ == "__main__":
    main()