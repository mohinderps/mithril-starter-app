var root = document.body;

var whereToRender = root;

var whatToRender = m('main', [
    m('h1', {class: 'title'}, 'My first app'),
    m('button', 'A button')
]);

m.render(root, whatToRender);