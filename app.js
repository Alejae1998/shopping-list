/* Imports */
import { checkAuth, createListItem, getListItems } from './fetch-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
checkAuth();

const listEl = document.querySelector('.list');
const listForm = document.querySelector('.item-form');
const deleteBtn = document.querySelector('.delete-button');

/* State */

/* Events */
listForm.addEventListener('load', async (e) => {
    e.preventDefault();
    const data = new FormData(listForm);
    const item = data.get('item');
    const qty = data.get('qty');
    await createListItem(item, qty);
    listForm.reset();
});
async function fetchAndDisplay() {
    const list = await getListItems();
    listEl.textContent = '';
    for (let item of list) {
        const itemEl = document.createElement('p');
        itemEl.textContent = `${item.qty} ${item.item}`;
        if (item.bought) {
            itemEl.classList.add('bought');
        } else {
            itemEl.classList.add('not-bought');
            itemEl.addEventListener('click', async () => {});
        }
    }
}

/* Display Functions */
