import "./style.css";
import svg from "svg";
import chevronLeft from "./chevron-left.svg";
import chevronRight from "./chevron-right.svg";

const ImageCarousel = function imageCarouselFactory(
  images = [],
  customClass = ""
) {
  const createImage = function createImageDOMElement(
    src,
    index,
    indicatorContainer
  ) {
    // Container
    const container = document.createElement("div");
    container.classList.add("crsl__image");
    container.dataset.index = index;

    // Image
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);

    // Add Indicator
    const indicator = document.createElement("div");
    indicator.classList.add("crsl__indicator");
    indicator.dataset.index = index;
    indicatorContainer.appendChild(indicator);

    return container;
  };

  const render = function renderImageCarousel() {
    // Container
    const carousel = document.createElement("div");
    carousel.classList.add("crsl");

    // Apply custom CSS class if provided
    if (customClass !== "") {
      carousel.classList.add(customClass);
    }

    // Indicators Container
    const indicators = document.createElement("div");
    indicators.classList.add("crsl__indicators");
    carousel.appendChild(indicators);

    // Images Container
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("crsl__images");
    carousel.appendChild(imagesContainer);

    // Images
    images.forEach((image, index) =>
      imagesContainer.appendChild(createImage(image, index, indicators))
    );

    // Set Initial Image
    indicators
      .querySelector(".crsl__indicator")
      .classList.add(".crsl__indicator--active");

    // Previous Control
    const prevControl = document.createElement("div");
    prevControl.classList.add("crsl__control", "crsl__control--prev");
    carousel.appendChild(prevControl);

    const prevIcon = svg(chevronLeft);
    prevIcon.classList.add("crsl__icon", "crsl__icon--prev");
    prevControl.appendChild(prevIcon);

    // Next Control
    const nextControl = document.createElement("div");
    nextControl.classList.add("crsl__control", "crsl__control--next");
    carousel.appendChild(nextControl);

    const nextIcon = svg(chevronRight);
    nextIcon.classList.add("crsl__icon", "crsl__icon--next");
    nextControl.appendChild(nextIcon);

    return carousel;
  };

  return render();
};

export default ImageCarousel;
