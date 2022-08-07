import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/products';
import axios from 'axios';

function useGetProducts() {
  const products = useSelector((state) => state.products.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products[0]) {
      axios
        .get('https://fakestoreapi.com/products')
        .then((res) => dispatch(setProducts(res.data)));
    }
  }, [dispatch, products]);

  return { products };
}

export default useGetProducts;
