///// Book Gallery /////

function renderBookGallery() {
  let bookGallery = document.getElementById("book_gallery");
  bookGallery.innerHTML = ""; 

  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    bookGallery.innerHTML += getBookGalleryTemplate(indexBooks);
  }
}

