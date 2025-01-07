import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function Detail() {
  return (
    <div className="w-4/5 mx-auto py-6">
      <div className="w-full text-4xl font-mono py-4 ">
        <h1>Detail</h1>
      </div>

      <div className="w-4xl mx-auto p-4 flex flex-col md:flex-row border-2 rounded-md shadow-md">
        {/* Product Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://canto-wp-media.s3.amazonaws.com/app/uploads/2019/09/19193320/image-url-15-768x513.jpg"
            alt="#"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="w-full relative md:w-1/2 md:pl-6 md:pr-6 bg">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 break-words">
            Title: <span className="text-2xl font-normal">cvskgvduk</span>
          </h2>

          <p className="text-xl text-gray-500 my-4 break-words">
            Category: <span>mobile</span>
          </p>
          <div className="text-amber-400 text-lg flex items-center pb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-2xl font-semibold text-gray-700 break-words">
            Description:{" "}
            <span className="text-2xl font-normal">cvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsdcvskgvdukvsd</span>
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-2xl text-green-600 font-semibold my-4">
              Price: $ 100
            </p>
            <Link
              to={"/"}
              className="mr-10 py-2 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white mt-2 md:text-2xl text-center"
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
