/* Imports */
import { checkAuth, getItems, deleteAll, createItem, completeItem } from './fetch-utils.js';
import { renderList } from './render-utils.js';
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
    await createItem(item, qty);
    listForm.reset();
    fetchAndDisplay();
});
async function fetchAndDisplay() {
    listEl.textContent = '';
    const lists = await getItems();
    for (let list of lists) {
        const itemEl = renderList(list);
        itemEl.addEventListener('click', async () => {
            await completeItem(list.id);
            fetchAndDisplay();
        });
        listEl.append(itemEl);
    }
}
deleteBtn.addEventListener('click', async () => {
    await deleteAll();
    fetchAndDisplay();
});

/* Display Functions */
window.addEventListener('load', async () => {
    fetchAndDisplay();
});
