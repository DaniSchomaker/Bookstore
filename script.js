///// Book Gallery /////

function renderBookGallery() {
  let bookGallery = document.getElementById("book_gallery");
  bookGallery.innerHTML = ""; 

  for (let i = 0; i < books.length; i++) {
    bookGallery.innerHTML += getBookGalleryTemplate(i);
  }
}