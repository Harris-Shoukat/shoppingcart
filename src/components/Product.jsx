import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  // console.log("data------------", data);
  return (
    <div className=" py-4">
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
              <img src={item.image} alt="#" className="aspect-square"/>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-2xl py-1 truncate"> {item.title}</p>
              <p className="text-2xl py-1 font-bold">$ {item.price}</p>
              <button className="w-full py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white mt-2 text-2xl">
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
