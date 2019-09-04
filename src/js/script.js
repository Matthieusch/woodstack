import _ from 'lodash';

function component() {
    console.log('JS component!');
    let element = document.createElement('div');

    element.innerHTML = _.join(['here', 'some', 'script!'], ' ');

    return element;
}

document.body.appendChild(component());