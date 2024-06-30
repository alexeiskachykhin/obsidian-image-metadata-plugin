# Image Metadata Plugin

Obsidian plugin that adds image metadata editing capabilties. Annotate photes with Exif metadata right from the image viewer screen.

![image](https://github.com/alexeiskachykhin/obsidian-image-metadata-plugin/assets/2787454/889c89b8-1eca-4dd5-9634-6bc1e19ee3f8)

## What's supported?

| Tag                   | File Formats |
| --------------------- | ------------ |
| Exif:ImageDescription | JPEG         |

## Development

```
nvm use
nvm ci
npm run dev
```

### Release

1. Bump version in [package.json](./package.json)
1. `RELEASE_VERSION=$(npm pkg get version | xargs)`
1. `npm run version`
1. `npm run build`
1. `git commit -am "Release $RELEASE_VERSION"`
1. `git tag -a "$RELEASE_VERSION" -m "Release $RELEASE_VERSION"`
1. `git push origin main --tags`
