import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createrestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="explore">
            <h1 class="explore__label">Restoran Yang Kamu Suka</h1>
                <div id="Resto" class="restos"></div>
        </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#Resto');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createrestoItemTemplate(resto);
    });
  },
};

export default Like;
