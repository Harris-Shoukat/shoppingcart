import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../redux/slice/cartSlice";
import { Spinner } from "react-bootstrap";
import { allProducts } from "../api/fetchapi";
import toast  from "react-hot-toast";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const products = await allProducts();
        setData(products);
      } catch (error) {
        console.error("fetching error api", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="w-full h-10 text-center text-4xl my-6 font-mono">
        <p>New Arrival</p>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-10 ">
        {data.map((item) => (
          <div
            className="border-2 py-4 px-4 rounded-lg hover:shadow-lg"
            key={item.id}
          >
            <div className="py-6">
              <img
                src={item.image || "path/to/fallback/image.jpg"}
                alt={item.title}
                className="aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-2xl py-1 truncate"> {item.title}</p>
              <p className="text-2xl py-1 font-bold">$ {item.price}</p>
              <div className="flex md:flex-col gap-2">
                <button
                  onClick={() => {
                    dispatch(AddCart(item));
                    toast.success('Item added to cart!')
                  }}
                  className="w-full py-2 rounded-lg bg-green-700 hover:bg-green-800 text-white mt-2 text-2xl text-center"
                >
                  Add Cart
                </button>
                <Link
                  to={`/details/${item.id}`}
                  className="w-full py-2 rounded-lg bg-green-700 hover:bg-green-800 text-white mt-2 text-2xl text-center no-underline"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
