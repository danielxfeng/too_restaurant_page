const h1 = () => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Beautiful Restaurant';
    return h1;
}

const h2 = () => {
    const h2 = document.createElement('h2');
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

const homepage = () => {
    const content = document.createElement('div');
    content.id = 'home';
    content.appendChild(h1());
    content.appendChild(h2());
    content.appendChild(p());
    return content;
}

export default homepage;