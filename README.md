# Image Metadata Plugin

Obsidian plugin that adds image metadata editing capabilties. Annotate photes with Exif metadata right from the image viewer screen.

![image](https://github.com/alexeiskachykhin/obsidian-image-metadata-plugin/assets/2787454/889c89b8-1eca-4dd5-9634-6bc1e19ee3f8)

## What's supported?

| Tag                   | File Formats |
| --------------------- | ------------ |
| Exif:ImageDescription | JPEG         |

## Development

### Release

1. Bump version in [package.json](./package.json)
1. `npm run version`
1. `npm run build`
1. `git commit -am "Release $(npm pkg get version)"`
1. `git tag -a "$(npm pkg get version)" -m "Release $(npm pkg get version)"`
1. `git push origin main --tags`
