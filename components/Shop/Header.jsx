import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const [pathnameState, setPathnameState] = useState('');

  useEffect(() => {
    if (router.pathname === '/shop/men') {
      setPathnameState('men');
    } else if (router.pathname === '/shop/jewelery') {
      setPathnameState('jewelery');
    } else if (router.pathname === '/shop/electronics') {
      setPathnameState('electronics');
    } else if (router.pathname === '/shop/women') {
      setPathnameState('women');
    }
  }, [router]);

  return (
    <div className="flex flex-col md:flex-row items-center mx-16 mt-3 space-x-3">
      <NextLink href="/shop/men">
        <a
          className={`p-3 ${pathnameState === 'men' && 'bg-black text-white'}`}
        >
          <h6 className="font-bold">men&apos;s clothing</h6>
        </a>
      </NextLink>
      <NextLink href="/shop/jewelery">
        <a
          className={`p-3 ${
            pathnameState === 'jewelery' && 'bg-black text-white'
          }`}
        >
          <h6 className="font-bold">jewelery</h6>
        </a>
      </NextLink>
      <NextLink href="/shop/electronics">
        <a
          className={`p-3 ${
            pathnameState === 'electronics' && 'bg-black text-white'
          }`}
        >
          <h6 className="font-bold">electronics</h6>
        </a>
      </NextLink>
      <NextLink href="/shop/women">
        <a
          className={`p-3 ${
            pathnameState === 'women' && 'bg-black text-white'
          }`}
        >
          <h6 className="font-bold">women&apos;s clothing</h6>
        </a>
      </NextLink>
    </div>
  );
}

export default Header;
