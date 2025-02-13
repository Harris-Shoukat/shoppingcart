import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";
import { TbMarquee } from "react-icons/tb";

function Detail() {
  const { pid } = useParams();
  const [singledata, setSingledata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${pid}`);
        setSingledata(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pid]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <ReactBootstrap.Spinner animation="border" />
      </div>
    );
  }

  if (!singledata) {
    return (
      <div className="text-4xl text-red-600 h-[100vh] pl-6 pt-6">
        ** No product data found!
      </div>
    );
  }

  return (
    <div className="w-4/5 h-[100vh] mx-auto py-6">
      <h2 className="text-4xl py-4 font-bold text-gray-700 mb-2 break-words">
        <span className="text-4xl font-semibold">
          {" "}
          {"\n"} {singledata.title}
        </span>
      </h2>

      
      <div className="w-4xl mx-auto p-4 flex flex-col md:flex-row border-2 rounded-md shadow-md">
        {/* Product Image */}
        <div className="w-full h-[400px] md:w-1/2  mb-6 md:mb-0">
          <img
            src={singledata.image}
            alt="#"
            className="w-full h-full object-contain rounded-lg shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="w-full relative md:w-1/2 md:pl-6 md:pr-6 bg">
          <p className="text-xl text-gray-500 my-4 break-words">
            Category: <span>{singledata.category}</span>
          </p>
          <div className="text-amber-400 text-xl flex items-center pb-4 gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-2xl font-semibold text-gray-700 break-words">
            Description:{` `}
            <span className="text-2xl font-normal">
              {singledata.description}
            </span>
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-2xl text-green-600 font-semibold my-4">
              Price: $ {singledata.price}
            </p>
            <Link
              to={"/detail/cartpage"}
              className="mr-10 py-1 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold md:text-2xl flex items-center no-underline"
            >
              <button>Add Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
