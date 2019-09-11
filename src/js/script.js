import _ from 'lodash';
import svg4everybody from 'svg4everybody';
import {WOW} from 'wowjs';

/* Loads SVG polyfill to inline SVG sprite for IE9 to IE Edge 12 */
(function() {
    var wow = new WOW({
        boxClass:     'anim',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

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