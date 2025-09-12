////// Book Gallery-Template //////

function getBookGalleryTemplate(indexBooks) {
  return `
    <article class="book_card"> 
      <header class="book_card_header">
        <h2 class="padding_x">${books[indexBooks].name}</h2>
      </header>

      <section class="book_illustration"> 
        <img src="./assets/img/book-image.png" alt="Abbildung des Buches">
      </section>
      
      <section class="book_description">
        <div class="book_price_and_likes">
          <span class="book_price">${books[indexBooks].price} €</span>
          <div class="book_likes">
            <span>${books[indexBooks].likes}</span>
            <button id="heart_${indexBooks}" class="like_button" onclick="toggleLike(${indexBooks})">
              ${getLikeIcon(indexBooks)}
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
        <div class="existing_comments">
          <h3>Kommentare:</h3>
          ${getBookComments(indexBooks)}
        </div>

        <div class="comment_formular">
          <input type="text" placeholder="Schreibe deinen Kommentar..."/>
          <button class="send_button" onclick="addComment()">
            <img src="./assets/icons/paper-plane-icon.png" alt="Button: Kommentar senden" />    
          </button>
        </div>

      </section>


    </article>
          `;
}

