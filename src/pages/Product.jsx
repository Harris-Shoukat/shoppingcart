import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchapi = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        console.error("fetching error api", error);
      } finally {
        setLoading(false);
      }
    };

    fetchapi();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <ReactBootstrap.Spinner animation="border" />
      </div>
    );
  }

  if (!data) {
    console.log("No Product to show.")
  }

  return (
    <div className=" py-4">
      <div className=" w-full h-10 text-center text-4xl my-6 font-mono">
        <p>New Arrival</p>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-10 ">
        {data.map((item) => (
          <div
            className="border-2 py-4 px-4 rounded-lg hover:shadow-lg"
            key={item.id}
          >
            <div className="py-6">
              <img src={item.image} alt="#" className="aspect-square" />
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-2xl py-1 truncate"> {item.title}</p>
              <p className="text-2xl py-1 font-bold">$ {item.price}</p>
              <div className="flex md:flex-col gap-2">
                <Link
                  to={"/cart"}
                  className="w-full py-2 rounded-lg bg-green-700 hover:bg-green-800 text-white mt-2 text-2xl text-center"
                >
                  <button>Add Cart</button>
                </Link>
                <Link
                  to={`/details/${item.id}`}
                  className="w-full py-2 rounded-lg bg-green-700 hover:bg-green-800 text-white mt-2 text-2xl text-center"
                >
                  <button>Details</button>
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
