import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {

  const productList = [
    { 
      id: 1, 
      name: "big tiffin set", 
      price: 126,
      image: "/images/BIG Tiffin set  Stainless Stee2.png"
    },
    { 
      id: 2, 
      name: "coper", 
      price: 162,
      image: "/images/coper1.png"
    },
    { 
      id: 3, 
      name: "Madu Tualang Asli 1KG", 
      price: 130,
      image: "/images/Madu Tualang Asli 1kg 1.png"
    },
    { 
      id: 4, 
      name: "Botol Air Tembaga Tulen1", 
      price: 75,
      image: "/images/Botol Air Tembaga Tulen1.png"
    },
     { 
      id: 5, 
      name: "HALWA KELAPA", 
      price: 126,
      image: "/images/HALWA KELAPA4.png"

    },
     { 
      id: 6, 
      name: "Minyak Kelapa Asli (Wooden Press) ", 
      price: 126,
      image: "/images/Minyak Kelapa Asli (Wooden Press) 1.png"
      
    },

     { 
      id: 7, 
      name: "minyak1 ", 
      price: 126,
      image: "/images/minyak1.png"
      
    },
    
   { 
      id: 9, 
      name: "stainless_steel_hot box ", 
      price: 126,
      image: "/images/stainless_steel_hot box1.png"
      
    },
      
   { 
      id: 10, 
      name: "Tepung barli organik", 
      price: 126,
      image: "/images/Tepung barli organik1.png"
      
    },



  ];

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    let updatedCart;
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const filteredProducts = productList.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      {/* SEARCH */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "60%",
            borderRadius: "25px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* PRODUCTS */}
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-box">

            <img 
              src={product.image} 
              alt={product.name} 
              className="product-img"
            />

            <h3>{product.name}</h3>
            <div className="price">MYR {product.price}</div>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>

    
      {/* FOOTER */}
      <footer>
        <h3>Company: Kembara Afiat</h3>
  <h3>Founder: Mohamed Firdous</h3>
  <h3>Location: Johor, Malaysia</h3>
  <h3>Email: asbarpkm2004@gmail.com</h3>
  <h3>Mobile: +91 78269 74909</h3>
  <div class="link"> <a href="https://wa.me/c/60108266105">click here!</a></div>
   

      </footer>

      <div className="copyright">
        © 2026 Kembara Afiat • All Rights Reserved
      </div>

    </div>
  );
}

export default Products;

