# Pipeline Understanding Codebook

- uses https://quartz.jzhao.xyz/ to generate a static page from `/content`

## Change content
- use Obsidian to open the `/content` folder as a vault (or edit as markdown)

## Build
- `npx quartz build --serve`
- help with `npx quartz build --help`

## Changes
- changed `.gitignore` and removed the rule for `.obsidian` because we want to commit the `.obsidian` folder
- changed `quartz.config.ts` with base url and page title, inline google fonts
- changed `quartz.layout.ts`
  - to remove footer links
  - to remove content metainfo (//Component.ContentMeta(),)