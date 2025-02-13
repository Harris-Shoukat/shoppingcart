import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { removeCart } from "../redux/slice/cartSlice";

function Cartpage() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-4/5 mx-auto py-6">
        <p className="font-semibold text-3xl flex justify-center my-4">
          Cart Page
        </p>
        <div className="max-w-screen-xl mx-auto py-6 px-4">
          <div className="flex justify-between space-x-6">
            {/* Cart Items */}
            <div className="w-3/4 space-y-4">
              {/* Cart Item 1 */}
              {cart.map((data) => (
                <div
                  key={data.id}
                  className="relative flex justify-between items-center bg-white p-4 rounded-lg shadow-lg"
                >
                  <img
                    src={data.image}
                    alt="Product 1"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{data.title}</h3>
                    <p className="text-gray-500 pt-3">$ {data.price}</p>
                  </div>
                  <div className="absolute right-4 top-2 text-red-600">
                    <button onClick={()=>dispatch(removeCart(data.id))}>
                      <CiCircleRemove
                        className="text-3xl font-bold"
                      />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-300 text-xl p-2 rounded">
                      -
                    </button>
                    <input
                      type="number"
                      className="w-12 text-center border rounded p-2"
                      value = {1}
                      readOnly
                    />
                    <button className="bg-gray-300 text-xl p-2 rounded">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Card */}
            <div className="w-1/4 h-[280px] bg-white p-6 rounded-lg shadow-lg mt-4 ">
              <h2 className="text-xl font-semibold mb-6">Cart Summary</h2>
              <div className="flex justify-between text-lg my-8">
                <span>Total quantity</span>
                <span className="font-semibold">{totalQuantity}</span>
              </div>
              <div className="flex justify-between text-lg my-8">
                <span>Total amount</span>
                <span className="font-semibold">$ {totalPrice}</span>
              </div>
              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartpage;
