import React, { useEffect, useState } from 'react';
import useGetProducts from '../../hooks/useGetProducts';
import HomeHeader from '../../components/Home/Header';
import ShopHeader from '../../components/Shop/Header';
import Card from '../../components/Shop/Card';

function Electronics() {
  const { products } = useGetProducts();
  const [productOfElectronics, setProductOfElectronics] = useState([]);

  useEffect(() => {
    setProductOfElectronics(
      products.filter((product) => product.category === 'electronics')
    );
  }, [products]);

  return (
    <div>
      <HomeHeader />
      <ShopHeader />
      <div className="parentParentCard">
        <div className="parentCard">
          {productOfElectronics.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Electronics;
