import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { login } from "./redux/RegisterSlice";
import { Route, Routes, Link } from "react-router-dom"; // Make sure to import Link for navigation
import Home from "./components/Home";
import ShowProduct from "./components/ShowProduct";
import AddToCart from "./components/AddToCart";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import AddToWishlist from "./components/AddToWishlist";
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isRegister } from "./redux/RegisterSlice";


function App() {
  const products = [
    {
      id: 1,
      name: "Pizza",
      price: 299,
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot ",
      shippingDetails: "Free Shipping",
      images: [
        "https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/15126955/pexels-photo-15126955/free-photo-of-close-up-shot-of-a-slice-of-pizza.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/4617831/pexels-photo-4617831.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/11730663/pexels-photo-11730663.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 2,
      name: "Watch",
      price: 5999,
      description:
        "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the persons activities.",
      shippingDetails: "Free Shipping",
      images: [
        "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/11638635/pexels-photo-11638635.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/9830093/pexels-photo-9830093.png?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1151440/pexels-photo-1151440.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1136589/pexels-photo-1136589.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 3,
      name: "Plant",
      price: 99,
      description:
        "Plant food products are the different types of food that we get from plants. Green plants are the primary source of food. Examples of plant-based food are vegetables, fruits, cereals, pulses, spices, nuts and oils.",
      shippingDetails: "Free Shipping",
      images: [
        "https://images.pexels.com/photos/11287048/pexels-photo-11287048.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/15124722/pexels-photo-15124722/free-photo-of-leopard-lily-in-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/7336018/pexels-photo-7336018.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/5144485/pexels-photo-5144485.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/5754097/pexels-photo-5754097.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 4,
      name: "House",
      price: 10000000,
      description:
        "Mansion architecture exudes a sense of grandeur with tall ceilings, large windows, and a beautiful facade. A mansion will also typically be built on a large property which contains other luxurious amenities like a pool, tennis courts, extensive gardens, walking paths, water features, and additional garages.",
      shippingDetails: "Free Shipping",
      images: [
        "https://images.pexels.com/photos/17741267/pexels-photo-17741267/free-photo-of-funfair-in-vietnam.png?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/7590350/pexels-photo-7590350.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/5035866/pexels-photo-5035866.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/16414722/pexels-photo-16414722/free-photo-of-candid-picture-of-a-man-sitting-on-a-bench-outside-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/11116098/pexels-photo-11116098.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 5,
      name: "Ring",
      price: 10999,
      description:
        'A ring is a round band, usually made of metal, worn as ornamental jewelry. The term "ring" by itself always denotes jewellery worn on the finger; when worn as an ornament elsewhere, the body part is specified within the term, e.g., earrings, neck rings, arm rings, and toe rings.',
      shippingDetails: "Free Shipping",
      images: [
        "https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/8891951/pexels-photo-8891951.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/8891959/pexels-photo-8891959.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/16438670/pexels-photo-16438670/free-photo-of-close-up-of-woman-wearing-a-silver-ring-with-a-ruby-stone.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/8306528/pexels-photo-8306528.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 6,
      name: "Shoes",
      price: 1999,
      description:
        "Running Shoes. Running shoes are lightweight and flexible. They are designed for anterior (forward) and vertical (up and down) motion. Running shoes have cushioning to absorb the impact of each stride, plus extra shock absorption in the heel.",
      shippingDetails: "Free Shipping",
      images: [
        "https://images.pexels.com/photos/10963373/pexels-photo-10963373.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/10963373/pexels-photo-10963373.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/9507116/pexels-photo-9507116.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/11292946/pexels-photo-11292946.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2404959/pexels-photo-2404959.png?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 7,
      name: "China Manchurian",
      price: 599,
      description:
        "A crab is a sea creature with a flat round body covered by a shell, and five pairs of legs with large claws on the front pair.",
      shippingDetails: "Free Shipping",
      images: [
        "https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/983587/pexels-photo-983587.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
  ]
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isRegistered = useSelector((state) => state.user.isRegistered);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(["/Login", "/Register"]);
    }
  }, [ navigate]);
  return (
    <div className="bg-img">
      <NavBar />
      
      <Routes>

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />}/>
        
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/AddToCart" element={<AddToCart />} />
            <Route path="/AddToWishlist" element={<AddToWishlist />} />
            <Route path="/ShowProduct/:productId" element={<ShowProduct />} />
            <Route path="/UserProfile" element={<UserProfile />} />
          </>
        ) :null }
      </Routes>
      <Footer />
    </div>
  );

}

export default App;







