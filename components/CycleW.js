import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import AddCycle from './AddCycle';
import EditCycle from '/pages/[id]/EditCycle';
import CycleC from './CycleC';

function CycleW() {
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
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden  font-sans  ">
          <div className="w-full lg:w-5/6">
            <div class="m-auto text-center lg:w-7/12">
              <h2 class="text-2xl text-gray-700 font-bold md:text-4xl">
                قائمة التدريب
              </h2>
            </div>

            {updateCycle ? (
              <EditCycle cycle={cycleId} />
            ) : (
              <div className="mt-10">
                {newCycle ? (
                  <AddCycle />
                ) : (
                  <div className="">
                    <section class="py-10 ">
                      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {cyclesData
                          ? cyclesData
                              .filter((cycle) => {
                                return cycle.nom.indexOf(searchTerm) !== -1;
                              })
                              ?.map(function (cycle, i) {
                                return (
                                  <CycleC
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
CycleW.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/cycles/${id}`);
  const { data } = await res.json();

  return { cycles: data };
};

export default CycleW;
