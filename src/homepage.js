import pic from "./images/jason-leung-poI7DelFiVA-unsplash.jpg";

const h1 = () => {
    const h1 = document.createElement('h2');
    h1.textContent = 'Beautiful Restaurant';
    return h1;
}

const h2 = () => {
    const h2 = document.createElement('h3');
    h2.textContent = 'Welcome to our beautiful restaurant.';
    return h2;
}

const p = () => {
    const p = document.createElement('p');
    p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quisquamquod, voluptates, quae, quos quia quibusdam quidem voluptatum voluptatem 
    quas doloremque quae quos quia quibusdam quidem voluptatum voluptatem quas doloremque.`;
    return p;
}

const hero = () => {
    const img = document.createElement('img');
    img.src = pic;
    img.alt = 'restaurant hero picture';
    const container = document.createElement('div');
    container.id = 'hero';
    container.appendChild(img);
    return container;
}

const homepage = () => {
    const text_area = document.createElement('div');
    text_area.id = 'text_area';
    text_area.appendChild(h1());
    text_area.appendChild(h2());
    text_area.appendChild(p());
    const pic_area = hero();
    const content = document.createElement('div');
    content.id = 'home';
    content.appendChild(text_area);
    content.appendChild(pic_area);
    return content;
}

export default homepage;