import { galleryItems } from './gallery-items.js';
// Change code below this line

const images = document.querySelector('.gallery')

// Creating gallery
const gallery = ({ preview, original, description}) => `<li class = 'gallery__item'><a class = 'gallery__link' href = '${original}'><img class = 'gallery__image' src = '${preview}' alt = '${description}' /></a></li>`
const markup = galleryItems.map(gallery).join('')
images.insertAdjacentHTML('beforeend', markup)

//SimpleLightBox

var lightbox = new SimpleLightbox('.gallery a', {
    'captionsData': 'alt',
    'captionDelay': 250,
});
