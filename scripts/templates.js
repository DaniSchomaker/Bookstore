////// Book Gallery //////

function getBookGalleryTemplate(i) {
  return `
    <article class="book_card"> 
      <header class="book_card_header">
        <h2 class="padding_x">${books[i].name}</h2>
      </header>

      <img src="./assets/img/book-image.png" alt="Abbildung des Buches">

        <section class="book_description">
            <div class="book_price_and_likes">
              <span class="book_price">${books[i].price} €</span>
              <div class="book_likes">
                <span>${books[i].likes}</span>
                <button class="like_button">
                  <img src="./assets/icons/heart-thin-icon.png" alt="Like" />
                </button>
              </div>
            </div>

            <div class="book_metadata">
              <table>
                  <tr>
                    <td>Autor:</td>
                    <td>${books[i].author}</td>
                  </tr>
                  <tr>
                    <td>Erscheinungsjahr:</td>
                    <td>${books[i].publishedYear}</td>
                  </tr>
                  <tr>
                    <td>Genre:</td>
                    <td>${books[i].genre}</td>
                  </tr>
              </table>
            </div>
        </section>




      </article>
          `;
}
        // <section class="comments">
        //   <h3>Kommentare:</h3>
        //   ${getBookComments()}
              
        // </section>


// function getBookComments() {
//   let comments = "";
//   for (let i = 0; i < books[i].comments.length; i++) {
//     comments += `<p>${books[i].comments[j].name}: ${books[i].comments[j].comment}</p>`;
//   }
//   return comments;
// }

  // let commentsRef = "";
  // for (let i = 0; i < books[i].comments.length; i++) {
  //   commentsRef += `<p>${books[i].comments[j].name}: ${books[i].comments[j].comment}</p>`;
  // }



//   return `
//     <button class="photo_preview" onclick="openLightbox(${i})">
//       <img
//         src="${PHOTOS[i]}"
//         alt="${PHOTOS_ALT[i]}"
//         class="photo_preview_img"
//        />
//     </button>`;

// die Fotos werden als Buttons eingefügt damit man sie per Tab+Enter (ohne Maus) öffnen kann
// }
