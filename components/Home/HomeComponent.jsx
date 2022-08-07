import React, { Component } from 'react';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

class HomeComponent extends Component {
  render() {
    return (
      <main className="flex justify-center mx-10 my-20 h-auto w-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <NextLink href="/shop/men">
            <a>
              <Flex
                justify="center"
                align="center"
                bgImage="/mens.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
                className=" 2xs:w-[250px] 2xs:h-[250px] xs:w-[350px] xs:h-[350px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] lg:w-[450px] lg:h-[400px] xl:w-[554px] xl:h-[400px]"
                cursor="pointer"
              >
                <div className="w-[261px] h-[71px] flex justify-center items-center bg-[#00000086] hover:bg-[#040607] transition-all">
                  <p className="text-white text-xl font-semibold">
                    men&apos;s clothing
                  </p>
                </div>
              </Flex>
            </a>
          </NextLink>
          <NextLink href="/shop/jewelery">
            <a>
              <Flex
                justify="center"
                align="center"
                bgImage="/jewelery.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
                className=" 2xs:w-[250px] 2xs:h-[250px] xs:w-[350px] xs:h-[350px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] lg:w-[450px] lg:h-[400px] xl:w-[554px] xl:h-[400px]"
                cursor="pointer"
              >
                <div className="w-[261px] h-[71px] flex justify-center items-center bg-[#00000086] hover:bg-[#040607] transition-all">
                  <p className="text-white text-xl font-semibold">jewelery</p>
                </div>
              </Flex>
            </a>
          </NextLink>
          <NextLink href="/shop/electronics">
            <a>
              <Flex
                justify="center"
                align="center"
                bgImage="/electronics.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
                className=" 2xs:w-[250px] 2xs:h-[250px] xs:w-[350px] xs:h-[350px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] lg:w-[450px] lg:h-[400px] xl:w-[554px] xl:h-[400px]"
                cursor="pointer"
              >
                <div className="w-[261px] h-[71px] flex justify-center items-center bg-[#00000086] hover:bg-[#040607] transition-all">
                  <p className="text-white text-xl font-semibold">
                    electronics
                  </p>
                </div>
              </Flex>
            </a>
          </NextLink>
          <NextLink href="/shop/women">
            <a>
              <Flex
                justify="center"
                align="center"
                bgImage="/women.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
                className=" 2xs:w-[250px] 2xs:h-[250px] xs:w-[350px] xs:h-[350px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] lg:w-[450px] lg:h-[400px] xl:w-[554px] xl:h-[400px]"
                cursor="pointer"
              >
                <div className="w-[261px] h-[71px] flex justify-center items-center bg-[#00000086] hover:bg-[#040607] transition-all">
                  <p className="text-white text-xl font-semibold">
                    women&apos;s clothing
                  </p>
                </div>
              </Flex>
            </a>
          </NextLink>
        </div>
      </main>
    );
  }
}

export default HomeComponent;
