import React, { useEffect, useState } from 'react';
import useGetProducts from '../../hooks/useGetProducts';
import HomeHeader from '../../components/Home/Header';
import ShopHeader from '../../components/Shop/Header';
import Card from '../../components/Shop/Card';

function Men() {
  const { products } = useGetProducts();
  const [productOfMen, setProductOfMen] = useState([]);

  useEffect(() => {
    setProductOfMen(
      products.filter((product) => product.category === "men's clothing")
    );
  }, [products]);

  return (
    <div>
      <HomeHeader />
      <ShopHeader />
      <div className="parentParentCard">
        <div className="parentCard">
          {productOfMen.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Men;
