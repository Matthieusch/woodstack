import _ from 'lodash';
import svg4everybody from 'svg4everybody';

/* Loads SVG polyfill to inline SVG sprite for IE9 to IE Edge 12 */
(function() {
    svg4everybody({
        attributeName: 'data-href',
        polyfill: true
    });
})();

/* Component sample */
// function component() {
//     console.log('JS component!');

//     let element = document.createElement('div');

//     element.innerHTML = _.join(['here', 'some', 'script!'], ' ');

//     return element;
// }

// document.body.appendChild(component());