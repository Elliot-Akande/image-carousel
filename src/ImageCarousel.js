import "./style.css";
import svg from "svg";
import modulo from "just-modulo";
import chevronLeft from "./chevron-left.svg";
import chevronRight from "./chevron-right.svg";

const ImageCarousel = function imageCarouselFactory(
  images = [],
  customClass = ""
) {
  let switchTimer;

  const resetTimer = function clearThenStartSwitchTimer() {
    clearTimeout(switchTimer);
    switchTimer = setTimeout(() => navigateImages("next"), 5000);
  };

  const changeImg = function slideCarouselToImg(index) {
    const img = document.querySelector(`[data-index='${index}'].crsl__image`);
    img.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });

    const lastIndicator = document.querySelector(".crsl__indicator--active");
    const nextIndicator = document.querySelector(
      `[data-index='${index}'].crsl__indicator`
    );
    lastIndicator.classList.toggle("crsl__indicator--active");
    nextIndicator.classList.toggle("crsl__indicator--active");

    resetTimer();
  };

  const navigateImages = function slideCarouselToNextImage(direction) {
    const activeIndicator = document.querySelector(".crsl__indicator--active");
    const lastIndex = parseInt(activeIndicator.dataset.index, 10);

    const index =
      direction === "prev"
        ? modulo(lastIndex - 1, images.length)
        : modulo(lastIndex + 1, images.length);

    changeImg(index);
  };

  const indicatorPressed = function handleIndicatorPressed(event) {
    const { index } = event.currentTarget.dataset;
    changeImg(index);
  };

  const createImage = function createImageDOMElement(src, index) {
    // Container
    const container = document.createElement("div");
    container.classList.add("crsl__image");
    container.dataset.index = index;

    // Image
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);

    return container;
  };

  const createIndicator = function createIndicatorDOMElement(index) {
    const indicator = document.createElement("div");
    indicator.classList.add("crsl__indicator");
    indicator.dataset.index = index;
    indicator.addEventListener("click", indicatorPressed);

    return indicator;
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
    const indicatorContainer = document.createElement("div");
    indicatorContainer.classList.add("crsl__indicator-container");
    carousel.appendChild(indicatorContainer);

    const indicators = document.createElement("div");
    indicators.classList.add("crsl__indicators");
    indicatorContainer.appendChild(indicators);

    // Images Container
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("crsl__images");
    carousel.appendChild(imagesContainer);

    // Images
    images.forEach((image, index) => {
      imagesContainer.appendChild(createImage(image, index, indicators));
      indicators.appendChild(createIndicator(index));
    });

    // Set Initial Image
    indicators
      .querySelector(".crsl__indicator")
      .classList.add("crsl__indicator--active");

    // Previous Control
    const prevControl = document.createElement("div");
    prevControl.classList.add("crsl__control", "crsl__control--prev");
    prevControl.addEventListener("click", () => navigateImages("prev"));
    carousel.appendChild(prevControl);

    const prevIcon = svg(chevronLeft);
    prevIcon.classList.add("crsl__icon", "crsl__icon--prev");
    prevControl.appendChild(prevIcon);

    // Next Control
    const nextControl = document.createElement("div");
    nextControl.classList.add("crsl__control", "crsl__control--next");
    nextControl.addEventListener("click", () => navigateImages("next"));
    carousel.appendChild(nextControl);

    const nextIcon = svg(chevronRight);
    nextIcon.classList.add("crsl__icon", "crsl__icon--next");
    nextControl.appendChild(nextIcon);

    return carousel;
  };

  resetTimer();

  return render();
};

export default ImageCarousel;
