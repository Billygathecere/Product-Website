const fruitjuice = [{
    juicename: "grapefruit",
    tags: "Sweet and delicious a good way to start your day",
    juiceimage:"Images/Grape fruit juice.jpg",
    price: "$ 45.00"
},    
{
    juicename: "Lychee juice",
    tags:"Leaves you with a leychee-feeling an 'oof'",
    juiceimage: "Images/Lychee  juice.jpg",
    price: "$ 50.00",
},
{
    juicename: "Natural Peach juice",
    tags: "Feeling peechy, take a drink of this and feel the kick",
    juiceimage: "Images/Natural Peach juice.jpg",
    price: "$ 35.00",
},
{
    juicename: "Noni juice",
    tags: "No one knows how it does its magic, you jusst feel it",
    juiceimage: "Images/Noni Juice.jpg",
    price: "$ 14.50",
},
{
    juicename: "Passion Fruit juice",
    tags: "Truly brings out the  passion in you and gives you the strength to do your work",
    juiceimage: "Images/Passion Fruit Juicce.jpg",
    price: "$ 12.00",
},
{
    juicename: "Pineapple juice Tropical",
    tags: "Leaves you feeling like you have wings of an angel",
    juiceimage: "Images/Pineapple juice Tropical.jpg",
    price: "$ 23.50",
},
{
    juicename: "Pomengranate juice",
    tags: "The red seeds make you salivate and make tastebuds happy",
    juiceimage: "Images/Pomengranate juice.jpg",
    price: "$ 31.00",
},
{
    juicename: "Pineapple juice",
    tags: "Yellow juice, brightens your day",
    juiceimage: "Images/Pineapple juice.jpg",
    price: "$ 28.00",
},
{
    juicename: "Strawberry juice",
    tags: "Leaves your tongue painted red, as red as blood",
    juiceimage: "Images/Strawberry juice.jpg",
    price: "$ 56.00",
},
{
    juicename: "Watermelon Juice",
    tags: "Leaves you with a red mouth of flavour",
    juiceimage: "Images/Watermelon Juice.jpg",
    price: "$ 35.00",
},
{
    juicename: "Chia seeds juice",
    tags: "Cheers you up ad gives you a broad smile",
    juiceimage: "Images/Chia seeds juice.jpg",
    price: "$ 25.00",
},
{ 
    juicename: "Lemon Juice",
    tags: "Sour taste in the mouth, but clears you throat",
    juiceimage: "Images/Lemon Juice.jpg",
    price: "$ 35.00",
}];

const productcontainer = document.querySelector(".products");   

fruitjuice.forEach(juice => {
    const productcard = document.createElement("div");
    productcard.classList.add("product");
    productcard.innerHTML = `
                <div class="product-header">
                    <img src="${juice.juiceimage}" alt="${juice.juicename}">
                    <i class="fa-regular fa-heart heart-icon" id="heart"></i>
                </div>
                <div class="product-body">
                    <h2 id="fruitname">${juice.juicename}</h2>
                    <p id="tags">${juice.tags}.</p>
                    <div class="rating-section">
                        <div class="stars" id="stars">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="price">${juice.price}</span>
                    </div>
                    <button class="btn-add-to-cart">Add to Cart</button>
                </div>
    `;

    productcontainer.appendChild(productcard);
})