import TheRestoDbSource from '../../data/therestodb-source';
import { createrestoItemTemplate } from '../templates/template-creator';

const ItemRestaurant = {
  async render() {
    return ` 
      <div class="content">
        <div class="explore">
          <h1 class="explore__label">Cari Restoran</h1>
            <div id="Resto" class="restos"></div>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#Resto');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createrestoItemTemplate(resto);
    });
  },
};

export default ItemRestaurant;
