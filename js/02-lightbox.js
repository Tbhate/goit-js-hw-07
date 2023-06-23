import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// pushing images

const gallery = document.querySelector(".gallery");
const pictureLink = document.querySelector(".gallery__link");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></img></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// lightbox

let modalGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});