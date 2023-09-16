import ImageCarousel from "./ImageCarousel";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const carousel = ImageCarousel([img1, img2, img3]);

const container = document.querySelector(".container");
console.log(container);
container.appendChild(carousel);
