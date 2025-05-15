import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { context } from "../Store";

const Cart = () => {
  const { cart,qtyHandler } = useContext(context);

  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button onClick={()=>qtyHandler(item.id,1)} className="bg-gray-200 px-2 rounded">-</button>
                        <span>{item.qty}</span>
                        <button onClick={()=>qtyHandler(item.id,2)} className="bg-gray-200 px-2 rounded">+</button>
                      </div>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
