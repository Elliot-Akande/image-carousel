import ImageCarousel from "./ImageCarousel";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

const carousel = ImageCarousel([img1, img2, img3, img4]);

const container = document.querySelector(".container");
container.appendChild(carousel);
