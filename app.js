/* Imports */
import { checkAuth, getListItems } from './fetch-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
checkAuth();

const listEl = document.querySelector('.list');
const listForm = document.querySelector('.item-form');
const deleteBtn = document.querySelector('.delete-button');

/* State */

/* Events */

/* Display Functions */
