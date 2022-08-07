import React from 'react';
import HomeHeader from '../../components/Home/Header';
import ShopHeader from '../../components/Shop/Header';
import Card from '../../components/Shop/Card';
import useGetProducts from '../../hooks/useGetProducts';

function Shop() {
  const { products } = useGetProducts();

  return (
    <div>
      <HomeHeader />
      <ShopHeader />
      <div className="parentParentCard">
        <div className="parentCard">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
