import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export function renderImages(images) {
  const markup = images
    .map(image => {
      return `<div class="photo-card">
              <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
              </a>
              <div class="info">
                <p><b>Likes:</b> ${image.likes}</p>
                <p><b>Views:</b> ${image.views}</p>
                <p><b>Comments:</b> ${image.comments}</p>
                <p><b>Downloads:</b> ${image.downloads}</p>
              </div>
            </div>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  gallery.innerHTML = '';
}
