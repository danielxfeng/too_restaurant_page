import menu from './json/menu.json';

const content = () => {
    const content = document.createElement('div');
    content.id = 'menu';
    content.appendChild(h1());
    content.appendChild(menuItems());
    return content;
}

const h1 = () => {
    const h1 = document.createElement('h2');
    h1.textContent = 'Menu';
    return h1;
}

const menuItems = () => {
    const content = document.createElement('div');
    content.id = 'menu-container';
    menu.forEach(item => {
        content.appendChild(menuItem(item));
    });
    return content;
}

const menuItem = (item) => {
    const tilte = document.createElement('h3');
    tilte.textContent = item.name;
    const price = document.createElement('p');
    price.textContent = `$${item.price}`;
    const description = document.createElement('p');
    description.textContent = item.description;

    const div = document.createElement('div');
    div.className = 'menu-item';
    div.appendChild(tilte);
    div.appendChild(price);
    div.appendChild(description);

    return div;
}

export default content;