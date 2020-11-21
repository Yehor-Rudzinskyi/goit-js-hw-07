const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeLIFromImages = function (arr) {
    const liForGallery = document.createElement('li');
    const imgForLiOfGallery = document.createElement('img');
    imgForLiOfGallery.setAttribute('src', arr.url)
    imgForLiOfGallery.setAttribute('alt', arr.alt)
    liForGallery.appendChild(imgForLiOfGallery)
    return liForGallery
}

const listOfImg = images.map((element) => makeLIFromImages(element));
console.log(listOfImg);

const galleryNode = document.querySelector('#gallery');

galleryNode.append(...listOfImg);