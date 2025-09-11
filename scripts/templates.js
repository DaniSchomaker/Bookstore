////// Book Gallery //////

function getBookGalleryTemplate(indexBooks) {
  return `
    <article class="book_card"> 
      <header class="book_card_header">
        <h2 class="padding_x">${books[indexBooks].name}</h2>
      </header>

      <img src="./assets/img/book-image.png" alt="Abbildung des Buches">

        <section class="book_description">
            <div class="book_price_and_likes">
              <span class="book_price">${books[indexBooks].price} €</span>
              <div class="book_likes">
                <span>${books[indexBooks].likes}</span>
                <button class="like_button">
                  <img src="./assets/icons/heart-thin-icon.png" alt="Like" />
                </button>
              </div>
            </div>

            <div class="book_metadata">
              <table>
                  <tr>
                    <td>Autor:</td>
                    <td>${books[indexBooks].author}</td>
                  </tr>
                  <tr>
                    <td>Erscheinungsjahr:</td>
                    <td>${books[indexBooks].publishedYear}</td>
                  </tr>
                  <tr>
                    <td>Genre:</td>
                    <td>${books[indexBooks].genre}</td>
                  </tr>
              </table>
            </div>
        </section>

        <section class="comments">
          <h3>Kommentare:</h3>
          ${getBookComments(indexBooks)}
              
        </section>


      </article>
          `;
}



function getBookComments(indexBooks) {
  let commentsRef = "";
  for (let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++) {
    commentsRef += `<p>${books[indexBooks].comments[indexComments].name}: ${books[indexBooks].comments[indexComments].comment}</p>`;
  }
  return commentsRef;
}

// function getProductsCharacteristics(index) {
//   let characteristics = "";

//   for (let indexCharacteristics = 0; indexCharacteristics < products[index].Eigenschaften.length; indexCharacteristics++) {
//     // characteristics += "<br>" + "- " + products[index].Eigenschaften[indexCharacteristics];
//     characteristics += `<li>${products[index].Eigenschaften[indexCharacteristics]}</li>`;
//   }

//   return `
//         ${products[index].Name}: ${products[index].Preis} €<br>
//         Kategorie: ${products[index].Kategorie}<br>
//         Eigenschaften: ${characteristics}<br><br>
//       `;
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
