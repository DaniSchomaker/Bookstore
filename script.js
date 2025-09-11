///// Book Gallery /////

function renderBookGallery() {
  let bookGallery = document.getElementById("book_gallery");
  bookGallery.innerHTML = ""; 

  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    bookGallery.innerHTML += getBookGalleryTemplate(indexBooks);
  }
}

function getBookComments(indexBooks) {
  let commentsRef = "";
  for (let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++) {
    commentsRef += `<p>${books[indexBooks].comments[indexComments].name}: ${books[indexBooks].comments[indexComments].comment}</p><br>`;
  }
  return commentsRef;
}

function addLike() {
  
}


function addComment() {

}