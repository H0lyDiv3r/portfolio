package main

import (
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"
)

const (
	rawBase     = "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons"
	maxAttempts = 4
)

var techs = []string{
	"aarch64",
	"adonisjs",
	"aerospike",
	"aframe",
	"aftereffects",
	"akka",
	"algolia",
	"almalinux",
	"alpinejs",
	"amazonwebservices",
	"anaconda",
	"android",
	"androidstudio",
	"angular",
	"angularjs",
	"angularmaterial",
	"ansible",
	"ansys",
	"antdesign",
	"apache",
	"apacheairflow",
	"apachekafka",
	"apachespark",
	"apex",
	"apl",
	"apollographql",
	"appcelerator",
	"apple",
	"appwrite",
	"archlinux",
	"arduino",
	"argocd",
	"artixlinux",
	"astro",
	"atom",
	"awk",
	"axios",
	"azure",
	"azuredevops",
	"azuresqldatabase",
	"babel",
	"babylonjs",
	"backbonejs",
	"ballerina",
	"bamboo",
	"bash",
	"bazel",
	"beats",
	"behance",
	"bevyengine",
	"biome",
	"bitbucket",
	"blazor",
	"blender",
	"bootstrap",
	"bower",
	"browserstack",
	"bulma",
	"bun",
	"c",
	"cairo",
	"cakephp",
	"canva",
	"capacitor",
	"carbon",
	"cassandra",
	"centos",
	"ceylon",
	"chakraui",
	"chartjs",
	"chrome",
	"circleci",
	"clarity",
	"clickhouse",
	"clion",
	"clojure",
	"clojurescript",
	"cloudflare",
	"cloudflareworkers",
	"cloudrun",
	"cmake",
	"cobol",
	"codeac",
	"codecov",
	"codeigniter",
	"codepen",
	"coffeescript",
	"composer",
	"confluence",
	"consul",
	"contao",
	"corejs",
	"cosmosdb",
	"couchbase",
	"couchdb",
	"cpanel",
	"cplusplus",
	"crystal",
	"csharp",
	"css3",
	"cucumber",
	"cypressio",
	"d3js",
	"dart",
	"datadog",
	"datagrip",
	"dataspell",
	"datatables",
	"dbeaver",
	"debian",
	"delphi",
	"denojs",
	"detaspace",
	"devicon",
	"digitalocean",
	"discloud",
	"discordjs",
	"django",
	"djangorest",
	"docker",
	"doctrine",
	"dot-net",
	"dotnetcore",
	"dovecot",
	"dreamweaver",
	"dropwizard",
	"drupal",
	"duckdb",
	"dyalog",
	"dynamodb",
	"dynatrace",
	"eclipse",
	"ecto",
	"elasticsearch",
	"electron",
	"eleventy",
	"elixir",
	"elm",
	"emacs",
	"embeddedc",
	"ember",
	"entityframeworkcore",
	"envoy",
	"erlang",
	"eslint",
	"expo",
	"express",
	"facebook",
	"fastapi",
	"fastify",
	"faunadb",
	"feathersjs",
	"fedora",
	"fiber",
	"figma",
	"filamentphp",
	"filezilla",
	"firebase",
	"firebird",
	"firefox",
	"flask",
	"flutter",
	"forgejo",
	"fortran",
	"foundation",
	"framermotion",
	"framework7",
	"fsharp",
	"fusion",
	"gardener",
	"gatling",
	"gatsby",
	"gazebo",
	"gcc",
	"gentoo",
	"ghost",
	"gimp",
	"git",
	"gitbook",
	"github",
	"githubactions",
	"githubcodespaces",
	"gitkraken",
	"gitlab",
	"gitpod",
	"gitter",
	"gleam",
	"glitch",
	"go",
	"godot",
	"goland",
	"google",
	"googlecloud",
	"googlecolab",
	"gradle",
	"grafana",
	"grails",
	"graphql",
	"groovy",
	"grpc",
	"grunt",
	"gulp",
	"hadoop",
	"handlebars",
	"harbor",
	"hardhat",
	"harvester",
	"haskell",
	"haxe",
	"helm",
	"heroku",
	"hibernate",
	"homebrew",
	"hoppscotch",
	"html5",
	"htmx",
	"hugo",
	"hyperv",
	"ie10",
	"ifttt",
	"illustrator",
	"inertiajs",
	"influxdb",
	"inkscape",
	"insomnia",
	"intellij",
	"ionic",
	"jaegertracing",
	"jamstack",
	"jasmine",
	"java",
	"javascript",
	"jeet",
	"jekyll",
	"jenkins",
	"jest",
	"jetbrains",
	"jetpackcompose",
	"jhipster",
	"jira",
	"jiraalign",
	"jquery",
	"json",
	"jule",
	"julia",
	"junit",
	"jupyter",
	"k3os",
	"k3s",
	"k6",
	"kaggle",
	"kaldi",
	"kalilinux",
	"karatelabs",
	"karma",
	"kdeneon",
	"keras",
	"kibana",
	"knexjs",
	"knockout",
	"kotlin",
	"krakenjs",
	"ktor",
	"kubeflow",
	"kubernetes",
	"labview",
	"laminas",
	"laravel",
	"laraveljetstream",
	"latex",
	"leetcode",
	"less",
	"libgdx",
	"linkedin",
	"linux",
	"linuxmint",
	"liquibase",
	"livewire",
	"llvm",
	"lodash",
	"logstash",
	"love2d",
	"lua",
	"lumen",
	"magento",
	"mapbox",
	"mariadb",
	"markdown",
	"materializecss",
	"materialui",
	"matlab",
	"matplotlib",
	"mattermost",
	"maven",
	"maya",
	"memcached",
	"mercurial",
	"meteor",
	"microsoftsqlserver",
	"minitab",
	"mithril",
	"mobx",
	"mocha",
	"modx",
	"moleculer",
	"mongodb",
	"mongoose",
	"monogame",
	"moodle",
	"msdos",
	"mysql",
	"nano",
	"nats",
	"neo4j",
	"neovim",
	"nestjs",
	"netbeans",
	"netbox",
	"netlify",
	"networkx",
	"newrelic",
	"nextjs",
	"nginx",
	"ngrok",
	"ngrx",
	"nhibernate",
	"nim",
	"nimble",
	"nixos",
	"nodejs",
	"nodemon",
	"nodered",
	"nodewebkit",
	"nomad",
	"norg",
	"notion",
	"npm",
	"npss",
	"nuget",
	"numpy",
	"nuxt",
	"nuxtjs",
	"oauth",
	"objectivec",
	"ocaml",
	"ohmyzsh",
	"okta",
	"openal",
	"openapi",
	"opencl",
	"opencv",
	"opengl",
	"openstack",
	"opensuse",
	"opentelemetry",
	"opera",
	"oracle",
	"ory",
	"p5js",
	"packer",
	"pandas",
	"passport",
	"perl",
	"pfsense",
	"phalcon",
	"phoenix",
	"photonengine",
	"photoshop",
	"php",
	"phpstorm",
	"pixijs",
	"playwright",
	"plotly",
	"pm2",
	"pnpm",
	"podman",
	"poetry",
	"polygon",
	"portainer",
	"postcss",
	"postgresql",
	"postman",
	"powershell",
	"premierepro",
	"primeng",
	"prisma",
	"processing",
	"processwire",
	"prolog",
	"prometheus",
	"protractor",
	"proxmox",
	"pug",
	"pulsar",
	"pulumi",
	"puppeteer",
	"purescript",
	"putty",
	"pycharm",
	"pypi",
	"pyscript",
	"pytest",
	"python",
	"pytorch",
	"qodana",
	"qt",
	"qtest",
	"quarkus",
	"quasar",
	"qwik",
	"r",
	"rabbitmq",
	"racket",
	"radstudio",
	"rails",
	"railway",
	"rancher",
	"raspberrypi",
	"reach",
	"react",
	"reactbootstrap",
	"reactnative",
	"reactnavigation",
	"reactrouter",
	"readthedocs",
	"realm",
	"rect",
	"redhat",
	"redis",
	"redux",
	"reflex",
	"remix",
	"renpy",
	"replit",
	"rexx",
	"rider",
	"rocksdb",
	"rockylinux",
	"rollup",
	"ros",
	"rspec",
	"rstudio",
	"ruby",
	"rubymine",
	"rust",
	"rxjs",
	"safari",
	"salesforce",
	"sanity",
	"sass",
	"scala",
	"scalingo",
	"scikitlearn",
	"sdl",
	"selenium",
	"sema",
	"sentry",
	"sequelize",
	"shopware",
	"shotgrid",
	"sketch",
	"slack",
	"socketio",
	"solidity",
	"solidjs",
	"sonarqube",
	"sourceengine",
	"sourcetree",
	"spack",
	"spicedb",
	"splunk",
	"spring",
	"spss",
	"spyder",
	"sqlalchemy",
	"sqldeveloper",
	"sqlite",
	"ssh",
	"stackblitz",
	"stackoverflow",
	"stata",
	"stenciljs",
	"storybook",
	"streamlit",
	"styledcomponents",
	"stylus",
	"subversion",
	"sulu",
	"supabase",
	"surrealdb",
	"svelte",
	"svgo",
	"swagger",
	"swift",
	"swiper",
	"symfony",
	"tailwindcss",
	"talos",
	"tauri",
	"teleport",
	"tensorflow",
	"terraform",
	"terramate",
	"tex",
	"thealgorithms",
	"threedsmax",
	"threejs",
	"thymeleaf",
	"titaniumsdk",
	"tmux",
	"tomcat",
	"tortoisegit",
	"towergit",
	"traefikmesh",
	"traefikproxy",
	"travis",
	"trello",
	"trpc",
	"turbo",
	"twilio",
	"twitter",
	"typescript",
	"typo3",
	"ubuntu",
	"unifiedmodelinglanguage",
	"unity",
	"unix",
	"unrealengine",
	"uwsgi",
	"v8",
	"vaadin",
	"vagrant",
	"vala",
	"vault",
	"veevalidate",
	"vercel",
	"vertx",
	"vim",
	"visualbasic",
	"visualstudio",
	"vite",
	"vitejs",
	"vitess",
	"vitest",
	"vscode",
	"vscodium",
	"vsphere",
	"vuejs",
	"vuestorefront",
	"vuetify",
	"vulkan",
	"vyper",
	"waku",
	"wasm",
	"web3js",
	"webflow",
	"webgpu",
	"weblate",
	"webpack",
	"webstorm",
	"windows11",
	"windows8",
	"wolfram",
	"woocommerce",
	"wordpress",
	"xamarin",
	"xcode",
	"xd",
	"xml",
	"yaml",
	"yarn",
	"yii",
	"yugabytedb",
	"yunohost",
	"zend",
	"zig",
	"zsh",
	"zustand",
}

var variantPatterns = []string{
	"%s-original.svg",
	"%s-original-wordmark.svg",
	"%s-plain.svg",
	"%s-plain-wordmark.svg",
	"%s-line.svg",
	"%s-line-wordmark.svg",
}

func main() {
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

func downloadTech(tech, outDir string) error {
	dest := filepath.Join(outDir, tech)
	if err := os.MkdirAll(dest, 0o755); err != nil {
		return err
	}
	saved := 0
	for _, pat := range variantPatterns {
		name := fmt.Sprintf(pat, tech)
		url := rawBase + "/" + tech + "/" + name
		if err := saveToDisk(url, filepath.Join(dest, name), tech); err != nil {
			if err != os.ErrNotExist {
				fmt.Fprintf(os.Stderr, "  %s: %v\n", name, err)
			}
			continue
		}
		saved++
	}
	if saved == 0 {
		fmt.Fprintf(os.Stderr, "  no SVGs found for %s\n", tech)
	}
	return nil
}

func saveToDisk(url, path, tech string) error {
	resp, err := apiGet(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	switch resp.StatusCode {
	case http.StatusOK:
	case http.StatusNotFound:
		return os.ErrNotExist
	default:
		return fmt.Errorf("HTTP %s", resp.Status)
	}
	out, err := os.Create(path)
	if err != nil {
		return err
	}
	defer out.Close()
	if _, err := io.Copy(out, resp.Body); err != nil {
		return err
	}
	fmt.Printf("saved %s/%s\n", tech, filepath.Base(path))
	return nil
}

func apiGet(url string) (*http.Response, error) {
	var lastErr error
	for attempt := 1; attempt <= maxAttempts; attempt++ {
		resp, err := http.Get(url)
		if err != nil {
			lastErr = fmt.Errorf("GET %s: %v", url, err)
			if attempt < maxAttempts {
				time.Sleep(time.Duration(1<<(attempt-1)) * time.Second)
			}
			continue
		}
		switch {
		case resp.StatusCode == http.StatusTooManyRequests || resp.StatusCode == http.StatusForbidden:
			lastErr = rateLimitErr(resp)
			resp.Body.Close()
			return nil, lastErr
		case resp.StatusCode >= 500:
			resp.Body.Close()
			lastErr = fmt.Errorf("GET %s: HTTP %s", url, resp.Status)
			if attempt < maxAttempts {
				time.Sleep(time.Duration(1<<(attempt-1)) * time.Second)
			}
			continue
		default:
			return resp, nil
		}
	}
	return nil, lastErr
}

func rateLimitErr(resp *http.Response) error {
	msg := "request rate limited"
	if reset, err := strconv.ParseInt(resp.Header.Get("X-RateLimit-Reset"), 10, 64); err == nil {
		if wait := time.Until(time.Unix(reset, 0)); wait > 0 {
			msg += fmt.Sprintf("; resets in about %d min", int(wait.Minutes())+1)
		}
	}
	return fmt.Errorf("%s (HTTP %s)", msg, resp.Status)
}
