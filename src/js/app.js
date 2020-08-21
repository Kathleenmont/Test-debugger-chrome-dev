import Currency from './library/util/currency';
import Dom from './library/dom/dom';

const App = {
    Currency,
    Dom
}

// Assign modules to window.ikea global object
window.library = window.library || {};
window.library.frontend = App;
console.log(window.library);

Dom.addClasses('.header__logo', 'brand-logo');

const string = '123456789';
const price = Currency.formatCurrency(string);
console.log(price);

export default {
    App
}
