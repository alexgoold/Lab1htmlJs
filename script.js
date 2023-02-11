class Pizza {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
const localCart = JSON.parse(localStorage.getItem("cart"));
let shoppingCart = [];

if (localCart) {
  document.getElementById("cartNumber").innerText = JSON.parse(
    localStorage.getItem("cart")
  ).length;

  for (const pizza of localCart) {
    shoppingCart.push(pizza);
  }
}

try {
  displayPizzas();
} catch (error) {}

try {
  displayCart();
} catch (error) {}

function displayCart() {
  const cartList = document.querySelector("#cartList");
  const totalPrice = document.querySelector("#totalPrice");
  let total = 0;

  for (const pizza of localCart) {
    const listItem = document.createElement("li");
    const imageDiv = document.createElement("div");
    const pizzaImage = document.createElement("img");
    const textDiv = document.createElement("div");
    const name = document.createElement("h5");
    const description = document.createElement("p");
    const removeFromCart = document.createElement("button");

    listItem.classList.add("d-flex");
    imageDiv.classList.add("flex-shrink-0");
    removeFromCart.classList.add("btn", "mt-0", "btn-dark");

    pizzaImage.src = pizza.image;
    pizzaImage.alt = pizza.description;
    pizzaImage.width = "100";
    pizzaImage.classList.add("ms-5", "mt-5", "me-3", "ps-3");

    textDiv.classList.add("flex-grow-1", "me-4");
    name.classList.add("mt-5");
    name.innerText = pizza.name;

    description.innerText = pizza.description + " - " + pizza.price;
    removeFromCart.innerText = "Remove";

    removeFromCart.onclick = () => {
      shoppingCart.pop(pizza);
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
      document.getElementById("cartNumber").innerText = JSON.parse(
        localStorage.getItem("cart")
      ).length;
      window.location.reload();
    };

    textDiv.append(name, description, removeFromCart);
    imageDiv.append(pizzaImage);
    listItem.append(imageDiv, textDiv);
    cartList.append(listItem);
    total += pizza.price;
    totalPrice.innerText = `Total Price: ${total}`;
  }
}

function displayPizzas() {
  const pizzas = [];
  const pizzaList = document.querySelector("#pizzaList");

  const Pepperoni = new Pizza(
    "Pepperoni",
    "Pepperoni, Mozzarella, Tomato sauce base",
    115,
    "Images/Pepperoni.webp"
  );
  const Hawaiian = new Pizza(
    "Hawaiian",
    "Ham, Pineapple, Mozzarella, Tomato sauce base",
    115,
    "Images/Hawaiian.webp"
  );
  const Vegetarian = new Pizza(
    "Vegetarian",
    "Capsicum, Olives, Mushrooms, Onion, Mozzarella, Tomato sauce base",
    110,
    "Images/Vegetarian-Pizza.webp"
  );
  const Supreme = new Pizza(
    "Supreme",
    "Pepperoni, Ham, Pineapple, Capsicum, Olives, Mushrooms, Onion, Mozzarella, Tomato sauce base",
    125,
    "Images/Supreme-Pizza.webp"
  );
  const MeatLovers = new Pizza(
    "Meatlovers",
    "Pepperoni, Sausage, Ham, Mozzarella, Barbeque sauce base",
    120,
    "Images/Meatlovers-pizza.webp"
  );
  const Swedish = new Pizza(
    "A 'Good' Pizza",
    "Banan, Melon, Kiwi, Citron",
    50,
    "Images/Good-Pizza.webp"
  );

  pizzas.push(Pepperoni, Hawaiian, Vegetarian, Supreme, MeatLovers, Swedish);

  for (const pizza of pizzas) {
    const listItem = document.createElement("li");
    const imageDiv = document.createElement("div");
    const pizzaImage = document.createElement("img");
    const textDiv = document.createElement("div");
    const name = document.createElement("h5");
    const description = document.createElement("p");
    const addToCart = document.createElement("button");

    listItem.classList.add("d-flex");
    imageDiv.classList.add("flex-shrink-0");

    pizzaImage.src = pizza.image;
    pizzaImage.alt = pizza.description;
    pizzaImage.width = "100";
    pizzaImage.height = "80";
    pizzaImage.classList.add("ms-5", "mt-5", "me-3", "ps-3");

    textDiv.classList.add("flex-grow-1", "me-4");
    name.classList.add("mt-5");
    addToCart.classList.add("btn", "mt-0", "btn-dark");
    name.innerText = pizza.name;

    description.innerText = pizza.description + " - " + pizza.price;
    addToCart.innerText = "Add to cart";

    addToCart.onclick = () => {
      shoppingCart.push(pizza);
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
      document.getElementById("cartNumber").innerText = JSON.parse(
        localStorage.getItem("cart")
      ).length;
    };

    textDiv.append(name, description, addToCart);
    imageDiv.append(pizzaImage);
    listItem.append(imageDiv, textDiv);
    pizzaList.append(listItem);
  }
}

function clearCart() {
  shoppingCart = [];
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
  window.location.reload();
}

/* <li class="d-flex">
  <div class="flex-shrink-0">
    <img
      class="m-4"
      src="Pepperoni.webp"
      alt="A picture of a pepperoni pizza. Tomato sauce base, Lots of pepperoni, mozzarella"
      width="100"
    />
  </div>
  <div class="flex-grow-1">
    <h5 class="mt-5">Pepperoni</h5>
    <p>Pepperoni, Mozzarella, Tomato sauce base</p>
  </div>
</li>; */
