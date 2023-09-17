# @akande/image-carousel

`@akande/image-carousel` is a lightweight JavaScript module that allows you to easily create customizable image carousels. It provides a lightweight and flexible solution for showcasing images in a visually appealing and interactive way.

## Features

- **Customizable Images:** Create image carousels with your own set of images.
- **Automatic Slideshow:** The carousel automatically transitions between images at regular intervals.
- **Navigation Controls:** Users can navigate through images using previous and next buttons.
- **Indicator Dots:** Optional indicator dots allow users to jump to specific images.
- **Custom Styling:** Minimal default styling is provided, allowing you to customize the carousel's appearance to match your project's design.

## Installation

You can install the `@akande/image-carousel` module via npm or yarn:

```bash
npm install @akande/image-carousel
# OR
yarn add @akande/image-carousel
```

## Usage

Here's an example of how to use the `@akande/image-carousel` module in your JavaScript code:

```javascript
import ImageCarousel from "@akande/image-carousel";

// Create an array of image URLs/File Paths
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // Add more image URLs as needed
];

const customClass = "my-carousel"; // Optional custom CSS class

// Create an instance of the ImageCarousel component
const carousel = ImageCarousel(images, customClass);

// Append the carousel to a DOM element
document.querySelector("#carousel-container").appendChild(carousel);
```

## API Reference

### `ImageCarousel(images, customClass)`

Creates an instance of the ImageCarousel component.

- `images` (Array of Strings): An array of image URLs to display in the carousel.
- `customClass` (String, optional): An optional custom CSS class to apply to the carousel container.

**Returns:** A DOM element representing the image carousel.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Elliot-Akande/image-carousel/blob/main/LICENSE) file for details.

## Issues

If you encounter any issues or have questions about this module, please [open an issue](https://github.com/Elliot-Akande/image-carousel/issues) on GitHub.

## Author

- Elliot Akande
- Email: [elbo.lynch@gmail.com](elbo.lynch@gmail.com)
- GitHub: [https://github.com/Elliot-Akande](https://github.com/Elliot-Akande)

## Keywords

- image
- carousel
- slider
- slideshow
- gallery
- JavaScript
- web
- frontend
- UI
- component
- responsive
- touch-friendly
- customization
- web development
- image viewer
- image navigation
- image presentation
