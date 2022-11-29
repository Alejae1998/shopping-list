/* Imports */
import { boughtItem, checkAuth, createListItem, deleteAll, getListItems } from './fetch-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
checkAuth();

const listEl = document.querySelector('.list');
const listForm = document.querySelector('.item-form');
const deleteBtn = document.querySelector('.delete-button');

/* State */

/* Events */
listForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(listForm);
    const item = data.get('item');
    const qty = data.get('qty');
    await createListItem(item, qty);
    listForm.reset();
    await fetchAndDisplay();
});
async function fetchAndDisplay() {
    const list = await getListItems();
    listEl.textContent = '';
}
deleteBtn.addEventListener('click', async () => {
    await deleteAll();
    fetchAndDisplay();
});

/* Display Functions */
window.addEventListener('load', async () => {
    fetchAndDisplay();
});
