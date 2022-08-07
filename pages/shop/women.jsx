import React, { useEffect, useState } from 'react';
import useGetProducts from '../../hooks/useGetProducts';
import HomeHeader from '../../components/Home/Header';
import ShopHeader from '../../components/Shop/Header';
import Card from '../../components/Shop/Card';

function Women() {
  const { products } = useGetProducts();
  const [productOfWomen, setProductOfWomen] = useState([]);

  useEffect(() => {
    setProductOfWomen(
      products.filter((product) => product.category === "women's clothing")
    );
  }, [products]);

  return (
    <div>
      <HomeHeader />
      <ShopHeader />
      <div className="parentParentCard">
        <div className="parentCard">
          {productOfWomen.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Women;
