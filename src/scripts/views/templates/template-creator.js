import CONFIG from '../../globals/config';

const createrestoDetailTemplate = (resto) => `
 <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
    <div class="resto__info">
      <h3>Informasi Lengkap</h3>
        <h4>Rating</h4>
        <p>${resto.rating}</p>
        <h4>Lokasi</h4>
        <p>${resto.city}</p>
        <h4>Alamat</h4>
        <p>${resto.address}</p>
        <h4>Kategori</h4>
        <p>${resto.categories.map((category) => category.name).join(', ')}</p>
        <h4>Menu Makanan</h4>
        <p>${resto.menus.foods.map((foods) => foods.name).join(', ')}</p>
        <h4>Menu Minuman</h4>
        <p>${resto.menus.drinks.map((drinks) => drinks.name).join(', ')}</p>

        <h4>Add Reviews</h4>
        <div class="form-review">
          <div class="card-form-detail">  
            <form autocomplete="on">
              <div class="input-form-review">
                <label for="name-input" class="form-label">Nama Lengkap:</label>
                <input type="text" class="form-control" id="name-input" minlength="1" maxlength="25" placeholder="Masukkan nama Anda" required>
              </div>
              <div class="input-form-review">
                <label for="review-input" class="form-label">Review:</label>
                <input type="text" class="form-control" id="review-input" minlength="1" maxlength="50" placeholder="Masukkan review Anda" required>
              </div>
              <button id="submit-review" type="submit" class="button-submit"><i class="fas fa-paper-plane"></i> Kirim</button>
            </form>
          </div>
        </div>

        <div class="detail-review">
          <h4>Reviews</h4>
          <p>${resto.customerReviews.map((review) => `
            <h4>${review.name}</h4>
            <p>${review.date}</p>
            <p>${review.review}</p>       
          `).join('')}</p>
        </div>  
    </div>    
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
`;

const createrestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <h4>Kota : ${resto.city}</h4> <br>
        <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createrestoItemTemplate,
  createrestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
