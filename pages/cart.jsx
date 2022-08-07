import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeHeader from '../components/Home/Header';
import NextImage from 'next/image';
import {
  addProduct,
  deleteProduct,
  incrementPrice,
  decrementPrice,
} from '../store/cart';
function Cart() {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const addToCart = (myProduct) => {
    dispatch(addProduct(myProduct));
    dispatch(incrementPrice(myProduct.price));
  };

  const deleteToCart = (myProduct) => {
    if (products.find((product) => product.id == myProduct.id)) {
      dispatch(deleteProduct(myProduct.id));
      dispatch(decrementPrice(myProduct.price));
    }
  };

  return (
    <div>
      <HomeHeader />
      {products[0] ? (
        <div>
          <div className="flex justify-center items-center my-10">
            <p className="font-bold text-xl">Total: ${totalPrice.toFixed(2)}</p>
          </div>
          {products?.map((product) => (
            <div
              className="w-full flex justify-center items-center flex-col lg:flex-row py-10 px-5 mx-auto lg:space-x-8"
              key={product.id}
            >
              <div className="2xs:w-[290px] xs:w-[390px] sm:w-[620px] md:w-[700px] 2xs:p-2 xs:p-4 sm:p-8 md:p-12 lg:p-5 lg:w-[417px] bg-white flex items-center justify-center rounded-lg my-shadow">
                <NextImage
                  src={product.image}
                  width="283px"
                  height="404px"
                  objectFit="contain"
                  alt={product.title}
                  priority={true}
                />
              </div>

              <div className="2xs:w-[290px] xs:w-[390px] sm:w-[620px] md:w-[700px] mt-10 lg:mt-0 lg:w-[419px] space-y-10">
                <h3 className="font-bold text-xl">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
                <div className="w-min flex items-center space-x-3">
                  <div
                    className="w-7 h-7 cursor-pointer flex items-center justify-center bg-black text-white"
                    onClick={() => deleteToCart(product)}
                  >
                    -
                  </div>
                  <p>{product.count}</p>
                  <div
                    className="w-7 h-7 cursor-pointer flex items-center justify-center bg-black text-white"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <p className="font-bold text-xl">Your cart empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
