import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import AddCycle from './AddCycle';
import EditCycle from '/pages/[id]/EditCycle';
import CycleCard from './CycleCard';

function Cycles() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const [cyclesData, setCyclesData] = useState(null);
  const [newCycle, setNewCycle] = useState(false);
  const [updateCycle, setUpdateCycle] = useState(false);
  const [cycleId, setCycleId] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/cycles');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result['data']);
        setCyclesData(result['data']);
        return result;
      } catch (err) {
        console.log(err);
      }
    }
    // declare the async data fetching function

    // call the function
    getUser()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  const handelSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className=" ">
      <div className="">
        <div className="absolute top-40 right-4 ">
          {/* <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        > */}
          <button
            onClick={() => (!newCycle ? setNewCycle(true) : setNewCycle(false))}
            className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded bg-blue-600 py-2 px-4 font-bold text-white"
          >
            <svg
              className="h-3 w-3 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <line x1="12" y1="5" x2="12" y2="19" />{' '}
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span> اضافة دورة تكوينية</span>
          </button>
          {/* </Link> */}
        </div>
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700  ">
              قائمة الجلسات التكوينية
            </h3>
            <div
              class="mx-auto flex max-w-md items-center rounded-lg bg-white "
              x-data="{ search: '' }"
            >
              <div class="w-full">
                <input
                  onChange={handelSearchTerm}
                  type="search"
                  class="w-full rounded-full px-4 py-1 text-gray-800 focus:outline-none"
                  placeholder="...بحث"
                  x-model="search"
                />
              </div>
              <button
                type="submit"
                class="flex h-12 w-12 items-center justify-center rounded-r-lg bg-blue-500 text-white"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
            {updateCycle ? (
              <EditCycle cycle={cycleId} />
            ) : (
              <div className="mt-10">
                {newCycle ? (
                  <AddCycle />
                ) : (
                  <div className="my-6 rounded bg-white shadow-md">
                    <section class="py-10 bg-gray-100">
                      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {cyclesData
                          ? cyclesData
                              .filter((cycle) => {
                                return cycle.nom.indexOf(searchTerm) !== -1;
                              })
                              ?.map(function (cycle, i) {
                                return (
                                  <CycleCard
                                    key={i}
                                    setUpdateCycle={setUpdateCycle}
                                    cycle={cycle}
                                  />
                                );
                              })
                          : null}
                      </div>
                    </section>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
Cycles.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/cycles/${id}`);
  const { data } = await res.json();

  return { cycles: data };
};

export default Cycles;
