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
              <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="#1F2937"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
              </div>

              <svg
                className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="#1F2937"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#1F2937"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
