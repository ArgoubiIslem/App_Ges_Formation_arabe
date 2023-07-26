/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Headers() {
  return (
    <div>
      <div class="border-b-2 shadow-md border-gray-100 pb-5">
        <div class="max-w-7xl mx-auto my-5 px-4 sm:px-6 ">
          <div class="flex flex-col-reverse md:flex-row min-w-full py-6 space-y-8 justify-center md:justify-between  md:space-x-10">
            <input
              id="search"
              class="flex  leading-none focus:outline-none  border-b-2 hover:border-b-3 border-blue-800  w-5/6 mt-12 mx-auto md:w-1/4 md:mt-0 md:mx-0 "
              type="text"
              placeholder=" بحث.."
            />
            <a class="flex-1 md:self-start" href="#">
              <div class="flex justify-center ">
                <div class="flex justify-center items-center">
                  <span class=" pt-1 mx-3 whitespace-nowrap text-4xl italic font-light text-blue-700 hover:text-gray-900"></span>
                </div>
              </div>
            </a>
            <div class="flex justify-around">
              <div class="flex justify-end ">
                <div class="flex whitespace-nowrap pt-1  mx-3justify-center space-x-1 "></div>

                <a
                  class=" mx-4 whitespace-nowrap text-black-800 hover:text-gray-900"
                  href="#"
                >
                  <h2 className=" font-bold text-xl ">
                    المركز الوطني للإعلامية
                  </h2>
                  <h3 className="text-xl">وحدة التكوين و الرسكلة</h3>
                </a>
              </div>
              <div class="-my-2 md:hidden">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span class="sr-only"></span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav id="bar" class="flex justify-center ">
          <div class=" flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-4  text-center text-gray-500">
            <a
              href="#"
              class="mx-8 hover:text-blue-900 active"
              aria-current="page"
            >
              {' '}
              التكوينات
            </a>
            <a href="#" class="mx-8 hover:text-blue-900">
              {' '}
              الفئات
            </a>

            <a href="#" class="mx-8 hover:text-blue-900">
              {' '}
              اتصل بنا
            </a>
            <Link href="/">
              <span class="mx-8 hover:text-blue-900"> الصفحة الرئيسية </span>
            </Link>
            <Link href="/welcom">
              <span class="mx-8 hover:text-blue-900"> تسجيل الدخول</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
