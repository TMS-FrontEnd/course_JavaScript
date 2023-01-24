import { Header as heder, title, arr } from './script/Header.js';
import Footer from './script/Footer.js';
import { user } from './script/distruct.js';
 

const app = document.querySelector('#app');

app.insertAdjacentHTML('afterbegin', heder('Hello world'));
app.insertAdjacentHTML('beforeend', Footer());


// == диструктуризация



