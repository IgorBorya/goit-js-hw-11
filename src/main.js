import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('#load-more');
let currentPage = 1;
let currentQuery = '';

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  currentPage = 1;
  currentQuery = query;

  clearGallery();
  await fetchAndRenderImages();
}

async function onLoadMore() {
  currentPage += 1;
  await fetchAndRenderImages();
}

async function fetchAndRenderImages() {
  try {
    const data = await fetchImages(currentQuery, currentPage);
    const images = data.hits;

    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderGallery(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
}
