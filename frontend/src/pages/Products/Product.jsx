import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Product = ({ product }) => {
  return (
    <div>
      <div className="w-[30rem] ml-[2rem] p-3 relative">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-[30rem] rounded h-[35rem]"
          />
          <HeartIcon product={product} />
        </div>

        <div className="p-4">
          <Link to={`/product/${product._id}`}>
            <h2 className="flex flex-col w-[28rem]">
              <div className="text-lg font-bold">{product.name}</div>
              <div className="flex justify-between">
                <span className="bg-green-700 text-white w-[8rem] text-center text-xl mt-5 rounded font-bold px-2.5 py-0.5 rounded-ful">
                  RS {product.price}
                </span>

                <button
                  className="p-2 rounded-full"
                  onClick={() => addToCartHandler(p, 1)}
                >
                  <AiOutlineShoppingCart size={35} />
                </button>
              </div>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
