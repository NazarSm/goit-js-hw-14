const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images
    .map((image) => `<li><img src="${image.url}" alt="${image.alt}" width="800px"></li>`)
    .join("");

const list = document.querySelector('.gallery');

list.insertAdjacentHTML("beforeend", markup);

list.style.display = 'flex';
list.style.alignItems = 'center';
list.style.flexDirection = 'column';
list.style.gap = '30px';
list.style.listStyleType = 'none';
