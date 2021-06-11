import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createrestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `  
      <div class="explore">
        <h1 class="explore__label">Detail Restoran</h1>
          <div id="Resto" class="resto"></div>
          <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestoDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#Resto');
    restaurantContainer.innerHTML = createrestoDetailTemplate(restaurant.restaurant);

    // review form
    const nameInput = document.querySelector('#name-input');
    const reviewInput = document.querySelector('#review-input');
    const btnSubmitReview = document.querySelector('#submit-review');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();

      // POST review
      await PostReview(url, nameInput.value, reviewInput.value);

      // clear form input
      nameInput.value = '';
      reviewInput.value = '';
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: url.id,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
      },
    });
  },
};

export default Detail;
