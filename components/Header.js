import React from 'react';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    function selected() {
      var targeted = event.target;
      var clicked = targeted.parentElement;

      var child = clicked.children;
      console.log(child);

      for (let i = 0; i < child.length; i++) {
        if (child[i].classNameList.contains('text-white')) {
          console.log(child[i]);
          child[i].classNameList.remove('text-white', 'bg-indigo-600');
          child[i].classNameList.add(
            'text-gray-600',
            'bg-gray-50',
            'border',
            'border-white'
          );
        }
      }

      targeted.classNameList.remove(
        'text-gray-600',
        'bg-gray-50',
        'border',
        'border-white'
      );
      targeted.classNameList.add('text-white', 'bg-indigo-600');
    }

    function selectNew() {
      var newL = document.getElementById('list');
      newL.classNameList.toggle('hidden');

      document.getElementById('ArrowSVG').classNameList.toggle('rotate-180');
    }

    function selectedSmall() {
      var text = event.target.innerText;
      var newL = document.getElementById('list');
      var newText = document.getElementById('textClicked');
      newL.classNameList.add('hidden');
      document.getElementById('ArrowSVG').classNameList.toggle('rotate-180');
      newText.innerText = text;

      document.getElementById('s1').classNameList.remove('hidden');
    }
  }, []);

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white rounded shadow-lg py-7 px-7">
          <nav className="flex justify-between">
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 className="absolute  m-auto left-0 right-0">
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </h2>
            </div>

            <div className=" flex space-x-5 justify-center items-center pl-2">
              <div className="  relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                <h2 className=" font-bold text-xl ">المركز الوطني للإعلامية</h2>
                <h3 className="text-xl">وحدة التكوين و الرسكلة</h3>
                <div className="animate-ping w-1.5 h-1.5 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                <div className=" w-1.5 h-1.5  rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
              </div>
            </div>
          </nav>

          <div className="block md:hidden w-full mt-5 ">
            <div
              onclick="selectNew()"
              className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full"
            >
              <div className="flex space-x-2">
                <span
                  id="s1"
                  className="font-semibold text-sm leading-3 hidden"
                >
                  Selected:{' '}
                </span>
                <p
                  id="textClicked"
                  className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
                >
                  Collections
                </p>
              </div>
              <svg
                id="ArrowSVG"
                className=" transform"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className=" relative">
              <ul
                id="list"
                className=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md"
              >
                <li
                  onclick="selectedSmall()"
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Arts
                </li>
                <li
                  onclick="selectedSmall()"
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Space
                </li>
                <li
                  onclick="selectedSmall()"
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Game
                </li>
                <li
                  onclick="selectedSmall()"
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Utility
                </li>
                <li
                  onclick="selectedSmall()"
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Cards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
