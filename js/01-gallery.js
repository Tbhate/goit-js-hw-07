import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");
const pictureLink = document.querySelector(".gallery__link");

const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></img></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);


gallery.addEventListener("click", openOriginal);

function openOriginal({ target }) {
  event.preventDefault();

  if (target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${target.dataset.source}"  width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscDown);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscDown);
      },
    }
  );

  instance.show();

  function onEscDown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}