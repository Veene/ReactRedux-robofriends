import { CHANGE_SEARCH_FIELD } from './constants.js';

export const setSearchField = (text) => ({
    type: 'CHANGE_SEARCH_FIELD',
    payload: text //payload is a redux often used elemnt just get used to it
})