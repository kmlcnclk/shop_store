import React from 'react';
import { IoBagOutline } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import NextLink from 'next/link';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const countOfProductKinds = useSelector(
    (state) => state.cart.countOfProductKinds
  );

  return (
    <div>
      <header className="hidden xs:flex xs:justify-between xs:items-center px-14 py-5">
        <NextLink href="/">
          <a>
            <h1 className="text-3xl font-semibold">Shop Store</h1>
          </a>
        </NextLink>
        <div className="flex justify-between items-center space-x-5">
          <NextLink href="/shop">
            <a>
              <div className="px-4 py-2 rounded-sm shadow-2xl bg-black flex items-center justify-center">
                <h3 className="text-2xl text-[#f3f3f3] font-semibold">Shop</h3>
              </div>
            </a>
          </NextLink>
          <NextLink href="/cart">
            <a>
              <div className="relative cursor-pointer">
                <IoBagOutline size="35px" />
                <p
                  className={`absolute ${
                    countOfProductKinds < 10
                      ? 'right-[14px]'
                      : countOfProductKinds > 9 && countOfProductKinds < 20
                      ? 'right-[10px]'
                      : 'right-[9px]'
                  } top-[9px] text-red-800`}
                >
                  {countOfProductKinds}
                </p>
              </div>
            </a>
          </NextLink>
        </div>
      </header>
      <header className="flex xs:hidden justify-center items-center px-14 py-5">
        <HiMenu size={24} onClick={onOpen} />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shop Store</DrawerHeader>

            <DrawerBody>
              <NextLink href="/shop">
                <a>
                  <div className="px-4 py-2 rounded-sm shadow-2xl bg-black flex items-center justify-center">
                    <h3 className="text-2xl text-[#f3f3f3] font-semibold">
                      Shop
                    </h3>
                  </div>
                </a>
              </NextLink>
            </DrawerBody>

            <DrawerFooter>
              <NextLink href="/cart">
                <a>
                  <div className="relative cursor-pointer">
                    <IoBagOutline size="35px" />
                    <p
                      className={`absolute ${
                        countOfProductKinds < 10
                          ? 'right-[14px]'
                          : countOfProductKinds > 9 && countOfProductKinds < 20
                          ? 'right-[10px]'
                          : 'right-[9px]'
                      } top-[9px] text-red-800`}
                    >
                      {countOfProductKinds}
                    </p>
                  </div>
                </a>
              </NextLink>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </header>
    </div>
  );
}

export default Header;
