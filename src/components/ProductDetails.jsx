import { FaStar, FaShippingFast, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdOutlinePolicy } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

export default function ProductDetails() {
  const {productId} =useParams();
  // console.log(productId);
  const [product,setProducts]=useState([])
  const getProducts =async ()=>{
    // const response = await fetch ('https://dummyjson.com/products');
    // const data = await response.json();
    axios.get('https://dummyjson.com/products/'+productId).then(
      (response)=>{
        console.log(response.data)
            setProducts(response.data)
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
    // setProducts(data.products);

  }

  useEffect (
    ()=>{
        getProducts();
    },[]
  )


  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="rounded-xl shadow-md w-full"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{product?.title}</h2>
          <p className="text-gray-600">{product?.description}</p>
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="text-black">{product?.rating} / 5</span>
          </div>
          {/* <div className="text-2xl font-semibold text-green-600">
            ${product?.price.toFixed(2)}{" "}
            <span className="text-sm text-gray-500 line-through">
              ${(product?.price / (1 - product?.discountPercentage / 100)).toFixed(2)}
            </span>
          </div> */}

          <p className="text-sm">Brand: <span className="font-medium">{product?.brand}</span></p>
          <p className="text-sm">SKU: <span className="font-medium">{product?.sku}</span></p>

          <p className="flex items-center gap-2 text-sm">
            <FaCheckCircle className="text-green-500" /> {product?.availabilityStatus}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaShippingFast className="text-blue-500" /> {product?.shippingInformation}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdOutlinePolicy className="text-red-500" /> {product?.returnPolicy}
          </p>
          <p className="text-sm text-gray-600">
            Warranty: <span className="font-medium">{product?.warrantyInformation}</span>
          </p>
          <p className="text-sm text-gray-600">
            Min. Order Quantity: <span className="font-medium">{product?.minimumOrderQuantity}</span>
          </p>

          <img src={product?.qrCode} alt="QR Code" className="w-24 mt-2" />
          {
            // console.log(product.qrCode)
          }
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {product?.reviews?.map((review, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-2 text-yellow-500 mb-1">
                {[...Array(review?.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">"{review?.comment}"</p>
              <p className="text-xs text-gray-500 mt-1">- {review?.reviewerName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
