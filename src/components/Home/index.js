import insertElement from '../../functions/insertElement.js';
import createCarousel from '../AdCarousel/index.js';

export default function getHome() {
    const root = document.querySelector('#root');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode('Home'));
    createCarousel(root);
}