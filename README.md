# Image Metadata Plugin

![Release version](https://img.shields.io/github/v/release/alexeiskachykhin/obsidian-image-metadata-plugin?style=for-the-badge) ![Download count](https://img.shields.io/github/downloads/alexeiskachykhin/obsidian-image-metadata-plugin/total?style=for-the-badge)

## About the Plugin

Obsidian plugin that adds image metadata editing capabilties. Annotate photos with Exif metadata right from the image viewer screen.

![image](https://github.com/alexeiskachykhin/obsidian-image-metadata-plugin/assets/2787454/889c89b8-1eca-4dd5-9634-6bc1e19ee3f8)

## Features

| Tag                   | File Formats |
| --------------------- | ------------ |
| Exif:ImageDescription | JPEG         |
| XMP:dc:description    | PNG          |

## Contact

For feedback, questions and bug reports, please reach out via [GitHub issues](https://github.com/alexeiskachykhin/obsidian-image-metadata-plugin/issues).

## Contributing

### Development Setup

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
1. Create a release on Github with `manifest.json`, `main.js`, `styles.css`
