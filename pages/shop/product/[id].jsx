import React, { useEffect, useState } from 'react';
import unFetch from 'isomorphic-unfetch';
import useGetProducts from '../../../hooks/useGetProducts';
import HomeHeader from '../../../components/Home/Header';
import ShopHeader from '../../../components/Shop/Header';
import NextImage from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  deleteProduct,
  incrementPrice,
  decrementPrice,
} from '../../../store/cart';

function Product({ id }) {
  const [product, setProduct] = useState({});
  const [productCount, setProductCount] = useState(0);

  const { products } = useGetProducts();

  const productsFromRedux = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(products.find((product) => product.id == id));

    if (productsFromRedux[0])
      setProductCount(
        productsFromRedux.find((product) => product.id == id)?.count
      );
  }, [products, id, productsFromRedux]);

  const addToCart = () => {
    dispatch(addProduct(product));
    dispatch(incrementPrice(product.price));
  };

  const deleteToCart = () => {
    if (productsFromRedux.find((product) => product.id == id)) {
      if (productsFromRedux.find((product) => product.id == id)?.count === 1) {
        setProductCount(0);
      }
      dispatch(deleteProduct(product.id));
      dispatch(decrementPrice(product.price));
    }
  };

  return (
    <div>
      <HomeHeader />
      <ShopHeader />
      {product?.id && (
        <div className="w-full flex justify-center items-center flex-col lg:flex-row py-20 px-5 mx-auto lg:space-x-8">
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
                onClick={deleteToCart}
              >
                -
              </div>
              <p>{productCount ? productCount : 0}</p>
              <div
                className="w-7 h-7 cursor-pointer flex items-center justify-center bg-black text-white"
                onClick={addToCart}
              >
                +
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;

export async function getStaticPaths() {
  const res = await unFetch('https://fakestoreapi.com/products');

  const products = await res.json();

  return {
    paths: products.map((product) => ({
      params: { id: `${product.id}` },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params: { id } }) {
  return {
    props: { id },
  };
}
