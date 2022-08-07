import React from 'react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addProduct, incrementPrice } from '../../store/cart';
import NextLink from 'next/link';

function Card({ product }) {
  const router = useRouter();

  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    dispatch(incrementPrice(product.price));
  };

  return (
    <NextLink href={`/shop/product/${product.id}`}>
      <a>
        <div
          className="w-[290px] h-[550px] sm:w-[350px] sm:h-[398px] my-shadow hover:scale-105 sm:hover:scale-110 cursor-pointer transition-all duration-300 rounded-lg"
          // onClick={() => router.push()}
        >
          <div className="flex justify-center w-full h-1/2">
            <NextImage
              src={product.image}
              width="127px"
              height="168px"
              alt={product.title}
              objectFit="contain"
              priority={true}
            />
          </div>
          <hr />
          <div className="p-7 flex flex-col justify-between h-1/2">
            <p>{product.title}</p>
            <p>${product.price}</p>
            <div
              className="w-full h-[52px] hover:bg-white hover:border hover:border-black cursor-pointer bg-black flex justify-center items-center transition-all"
              onClick={addToCart}
            >
              <p className="text-white w-full h-full flex justify-center items-center hover:text-black transition-all duration-300">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
      </a>
    </NextLink>
  );
}

export default Card;
