import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/ProductDetails/ProductDetails";
import { v4 as uuidv4 } from "uuid";

const products = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    maker: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer some, they'll withstand everything the weather can offer.",
    price: 250,
    isDiscounted: true,
    discountPercentage: 50,
    images: [
      {
        imageNumber: 1,
        imageSource: "https://i.ibb.co/h2ZsQ9r/image-product-1.jpg",
        imageAlt: "Product Showcase 1",
      },
      {
        imageNumber: 2,
        imageSource: "https://i.ibb.co/pRmjqpC/image-product-2.jpg",
        imageAlt: "Product Showcase 2",
      },
      {
        imageNumber: 3,
        imageSource: "https://i.ibb.co/jwvWJqJ/image-product-3.jpgg",
        imageAlt: "Product Showcase 3",
      },
      {
        imageNumber: 4,
        imageSource: "https://i.ibb.co/cFRLBLS/image-product-4.jpg",
        imageAlt: "Product Showcase 4",
      },
    ],
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    maker: "Nike",
    description:
      "The radiance lives on with the b-ball original. Crossing hardwood comfort with off-court flair, it puts a fresh spin on what you know best: '80s-inspired construction, bold details and nothin'-but-net style.",
    price: 110,
    isDiscounted: false,
    discountPercentage: 0,
    images: [
      {
        imageNumber: 1,
        imageSource:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67151472-8bd0-46cd-9f87-c6bda52a89ad/air-force-1-07-shoes-VJhk3P.png",
        imageAlt: "Product Showcase 1",
      },
      {
        imageNumber: 2,
        imageSource:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7906d66-e05f-47d7-8dc5-388d033046db/air-force-1-07-shoes-VJhk3P.png",
        imageAlt: "Product Showcase 2",
      },
      {
        imageNumber: 3,
        imageSource:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/be545435-32ea-41b5-9574-3f35029a83f7/air-force-1-07-shoes-VJhk3P.png",
        imageAlt: "Product Showcase 3",
      },
      {
        imageNumber: 4,
        imageSource:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/66d458f3-20aa-43c1-b748-4a0fbc0e2679/air-force-1-07-shoes-VJhk3P.png",
        imageAlt: "Product Showcase 4",
      },
    ],
  },
];

const App = () => {
  // eslint-disable-next-line
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const [selectedItemQuantity, setSelectedItemQuantity] = useState(1);

  const handleAddToShoppingCart = () => {
    const item = structuredClone(selectedProduct);
    const newShoppingCartItem = {
      itemId: uuidv4(),
      item: item,
      itemQuantity: selectedItemQuantity,
    };

    setShoppingCart((curr) => [...curr, newShoppingCartItem]);

    console.log(shoppingCart);
  };

  const handleRemoveFromShoppingCart = (itemId) => {
    setShoppingCart((items) => items.filter((item) => item.itemId !== itemId));
  };

  return (
    <>
      <Navigation
        handleRemoveFromShoppingCart={handleRemoveFromShoppingCart}
        shoppingCart={shoppingCart}
      ></Navigation>
      <main>
        <Product
          handleAddToShoppingCart={handleAddToShoppingCart}
          selectedItemQuantity={selectedItemQuantity}
          setSelectedItemQuantity={setSelectedItemQuantity}
          selectedProduct={selectedProduct}
        ></Product>
      </main>
    </>
  );
};

export default App;
