import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "../css/home.css";;

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Item added successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <>
      {/* {!keyword ? <Header /> : null} */}

      <nav>
        <Link to='/'>
        <span className="logo">Buysphere</span>
        </Link>
        <div className="menu">
          <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/all-product'>Product</Link>
            </li>
            <li>
              <Link to='/feature'>Feature</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/order-history'>Orders</Link>
            </li>

            
          </ul>
        </div>
        <div className="cartTxt">
          <div>
            <Link to='/cart'><span class="material-symbols-outlined">shopping_bag</span></Link>
          </div>
          <Link to='/login'><button className="loginBtn bg-white">Login</button></Link>
        </div>
        
      </nav>

      <section className="heroSection">
        <div>
          <div
            className="hero"
            style={{ backgroundImage: "url('/img/asus.jpg')" }}
          >
            <div className="hero-txt">
              <div className="hero-up">
                <h1 className="heroHeading">
                  Tech That <span className="boldTxt">Inspires Prices</span>{" "}
                  That Delight
                </h1>
              </div>
              <div className="heroPera">
                Dive into our collection of the latest electronics and
                gadgets,all at prices that make it easy to upgrade.Experience
                the best without breaking the bank.
              </div>
              {/* <div className="btn"><button text="BUY NOW"></button></div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="category">
        <span className="text-6xl text-white font-bold">Category</span>
        <div className="bnrBox">
          <div style={{ backgroundImage: "url('/img/laptop.webp')" }}>
            <span>Data</span>
          </div>
          <div style={{ backgroundImage: "url('/img/graphic-card.jpg')" }}>
            <span>Data</span>
          </div>
          <div style={{ backgroundImage: "url('img/motherboard.jpg')" }}>
            <span>Data</span>
          </div>
          <div style={{ backgroundImage: "url('/img/mouse.avif')" }}>
            <span>Data</span>
          </div>
        </div>
      </section>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-green-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>

          <section
        className="adBanner"
        style={{ backgroundImage: "url('/img/hero-img.jpg')" }}
      >
        <div>
          <span className="adTxt">Beyond Fast</span>
          <br />
          <span className="headTri">GeForce RTX 40 Series</span>
          <p className="bnDis">
            NVIDIA® GeForce RTX™ 40 Series GPUs are beyond fast for gamers and
            creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace
            architecture which delivers a quantum leap in both performance and
            AI-powered graphics. Experience lifelike virtual worlds with ray
            tracing and ultra-high FPS gaming with the lowest latency. Discover
            revolutionary new ways to create and unprecedented workflow
            acceleration.
          </p>
          <button className="btnSec bg-green-700">See All Buy Option</button>
        </div>
        <div></div>
      </section>
        </>
      )}
    </>
  );
};

export default Home;
