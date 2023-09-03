import { galleryItems } from './gallery-items.js';
// Change code below this line

const images = document.querySelector('.gallery')

// Listener

images.addEventListener('click', selectImage)

// Delegation

function selectImage(event) {

    event.preventDefault()

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const selectedImage = event.target.dataset.source
    basicLightbox.create(`
		<img src="${selectedImage}" width="800" height="600">
	`).show()

}

// Creating gallery
const gallery = ({ preview, original, description}) => `<li class = 'gallery__item'><a class = 'gallery__link' href = '${original}'><img class = 'gallery__image' src = '${preview}' data-source= '${original}' alt = '${description}' /></a></li>`
const markup = galleryItems.map(gallery).join('')
images.insertAdjacentHTML('beforeend', markup)
console.log(galleryItems);