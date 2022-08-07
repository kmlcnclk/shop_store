import React, { useEffect, useState } from 'react';
import useGetProducts from '../../hooks/useGetProducts';
import HomeHeader from '../../components/Home/Header';
import ShopHeader from '../../components/Shop/Header';
import Card from '../../components/Shop/Card';

function Jewelery() {
  const { products } = useGetProducts();
  const [productOfJewelery, setProductOfJewelery] = useState([]);

  useEffect(() => {
    setProductOfJewelery(
      products.filter((product) => product.category === "jewelery")
    );
  }, [products]);

  return (
    <div>
      <HomeHeader />
      <ShopHeader />
      <div className="parentParentCard">
        <div className="parentCard">
          {productOfJewelery.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jewelery;
