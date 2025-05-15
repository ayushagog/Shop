import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { context } from "../Store";

const Listing = () => {
  const { addToCart } = useContext(context);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categorySlug } = useParams();
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 20;
  // console.log(categorySlug);
  const getProducts = async () => {
    // const response = await fetch ('https://dummyjson.com/products');
    // const data = await response.json();
    // setProducts(data.products);
  };

  const getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        // console.log(response.data)
        setCategory(response.data);
        // console.log(category);
      })
      .catch((error) => {
        setCategory([]);
        console.log(error);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  // console.log(products)

  const pagination = [];
  for (let i = 0; i < totalPage; i++) {
    pagination.push(
      <button
        onClick={() => setCurrentPage(i)}
        className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
      >
        {i + 1}
      </button>
    );
  }

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?skip=${currentPage * limit}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        setProducts([]);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  // console.log(pagination);
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 ">Featured Products</h2>

        <div className="grid grid-cols-5 gap-5">
          <ul className=" col-span-1">
            <Link to="/">
              <li className="w-full p-2 mb-2 cursor-pointer shadow">All</li>
            </Link>
            {category.map((category, index) => {
              return (
                <Link key={index} to={`/${category?.slug}`}>
                  <li className="w-full p-2 mb-2 cursor-pointer shadow">
                    {category.name}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className="grid col-span-4 grid-cols-1 content-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex col-span-full  space-x-2 mt-6">
              {pagination}
            </div>

            {loading
              ? [1, 2, 3, 4, 5, 6].map(() => {
                  return (
                    <div
                      key={products.id}
                      className="bg-gray-800 rounded-xl shadow animate-pulse"
                    >
                      <div className="rounded-t-xl w-full h-60 bg-gray-700"></div>
                      <div className="p-4 space-y-3">
                        <div className="h-5 bg-gray-700 rounded w-3/4"></div>
                        <div className="flex space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-4 w-4 rounded bg-gray-700"
                            ></div>
                          ))}
                        </div>
                        <div className="h-5 bg-gray-700 rounded w-1/2"></div>
                        <div className="h-10 bg-gray-700 rounded w-full mt-4"></div>
                      </div>
                    </div>
                  );
                })
              : products.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300"
                  >
                    <Link to={`/details/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="rounded-t-xl w-full h-60 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">
                        {product.title}
                      </h3>
                      <div className="flex items-center text-yellow-400 mb-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FiStar
                            key={i}
                            className={
                              i < product.rating
                                ? "fill-current"
                                : "text-gray-600"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-blue-400 font-semibold mb-4">
                        {product.price}
                      </p>

                      <button onClick={() => addToCart(product.id)} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg">
                        <FiShoppingCart  />{" "}
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
