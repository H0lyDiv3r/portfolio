package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

const repoBase = "https://api.github.com/repos/devicons/devicon/contents/icons"

type ghEntry struct {
	Name string `json:"name"`
	Type string `json:"type"`
	URL  string `json:"download_url"`
}

func main() {
	techs, err := listTechs()
	if err != nil {
		fmt.Fprintf(os.Stderr, "fetching tech list: %v\n", err)
		os.Exit(1)
	}

	var listOnly bool
	var outDir string
	flag.BoolVar(&listOnly, "list", false, "list available techs and exit")
	flag.StringVar(&outDir, "out", "./logos", "output directory")

	sel := make(map[string]*bool, len(techs))
	for _, tech := range techs {
		sel[tech] = flag.Bool(tech, false, "download "+tech+" icons")
	}

	flag.Usage = func() {
		fmt.Fprintf(os.Stderr, "Usage: %s [-list] [-out DIR] [-tech ...]\n\nAvailable techs:\n", os.Args[0])
		for _, tech := range techs {
			fmt.Fprintf(os.Stderr, "  -%s\n", tech)
		}
	}
	flag.Parse()

	if listOnly {
		fmt.Println(strings.Join(techs, "\n"))
		return
	}

	var chosen []string
	for _, tech := range techs {
		if *sel[tech] {
			chosen = append(chosen, tech)
		}
	}
	if len(chosen) == 0 {
		flag.Usage()
		os.Exit(2)
	}

	failed := false
	for _, tech := range chosen {
		if err := downloadTech(tech, outDir); err != nil {
			fmt.Fprintf(os.Stderr, "error downloading %s: %v\n", tech, err)
			failed = true
		}
	}
	if failed {
		os.Exit(1)
	}
}

func listTechs() ([]string, error) {
	var entries []ghEntry
	if err := getJSON(repoBase, &entries); err != nil {
		return nil, err
	}
	var techs []string
	for _, e := range entries {
		if e.Type == "dir" {
			techs = append(techs, e.Name)
		}
	}
	return techs, nil
}

func downloadTech(tech, outDir string) error {
	var entries []ghEntry
	if err := getJSON(repoBase+"/"+tech, &entries); err != nil {
		return err
	}
	dest := filepath.Join(outDir, tech)
	if err := os.MkdirAll(dest, 0o755); err != nil {
		return err
	}
	for _, e := range entries {
		if !strings.HasSuffix(e.Name, ".svg") || e.URL == "" {
			continue
		}
		if err := downloadFile(e.URL, filepath.Join(dest, e.Name)); err != nil {
			fmt.Fprintf(os.Stderr, "  failed %s: %v\n", e.Name, err)
			continue
		}
		fmt.Printf("saved %s/%s\n", tech, e.Name)
	}
	return nil
}

func downloadFile(url, path string) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("HTTP %s", resp.Status)
	}
	out, err := os.Create(path)
	if err != nil {
		return err
	}
	defer out.Close()
	_, err = io.Copy(out, resp.Body)
	return err
}

func getJSON(url string, v any) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("GET %s: %s", url, resp.Status)
	}
	return json.NewDecoder(resp.Body).Decode(v)
}
