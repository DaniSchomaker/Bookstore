///// Book Gallery /////

function renderBookGallery() {
  let bookGallery = document.getElementById("book_gallery");
  bookGallery.innerHTML = "";

  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    bookGallery.innerHTML += getBookGalleryTemplate(indexBooks);
  }
}

function getLikeIcon(indexBooks) {
  if (books[indexBooks].liked === true) {
    return `<img src="./assets/icons/heart-icon.png" alt="Liked" />`;
  } else {
    return `<img src="./assets/icons/heart-thin-icon.png" alt="Not liked" />`;
  }
}

function toggleLike(indexBooks) {
  if (books[indexBooks].liked === true) {
    books[indexBooks].liked = false;
    books[indexBooks].likes--;   // Like-Anzahl geht runter
  } else {
    books[indexBooks].liked = true;
    books[indexBooks].likes++;   // Like-Anzahl geht rauf
  }

   renderBookGallery();
}

// function toggleLike(indexBooks) {
//   if (books[indexBooks].liked === true) {
//     books[indexBooks].liked = false;
//   } else {
//     books[indexBooks].liked = true;
//   }

//   // Wichtig, die ID MUSS {indexBooks} haben, da 
//   document.getElementById(`heart_${indexBooks}`).innerHTML = getLikeIcon(indexBooks);
// }

function getBookComments(indexBooks) {
  let commentsRef = "";
  for (
    let indexComments = 0;
    indexComments < books[indexBooks].comments.length;
    indexComments++
  ) {
    commentsRef += `<p>${books[indexBooks].comments[indexComments].name}: ${books[indexBooks].comments[indexComments].comment}</p><br>`;
  }
  return commentsRef;
}

function addLike() {}

function addComment() {}
