import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import AddParticipant from './AddParticipant';
import EditParticipant from '/pages/[id]/EditParticipant';
import ParticipantCard from './ParticipantCard';

function Participants() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const [participantsData, setParticipantsData] = useState(null);
  const [newParticipant, setNewParticipant] = useState(false);
  const [updateParticipant, setUpdateParticipant] = useState(false);
  const [participantId, setParticipantId] = useState();
  const [frid, setFrid] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/participants');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result['data']);
        setParticipantsData(result['data']);
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
            onClick={() =>
              !newParticipant
                ? setNewParticipant(true)
                : setNewParticipant(false)
            }
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
            <span> اضافة مشارك</span>
          </button>
          {/* </Link> */}
        </div>
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700  ">
              قائمة المشاركون
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
            {updateParticipant ? (
              <EditParticipant participant={participantId} />
            ) : (
              <div className="mt-10">
                {newParticipant ? (
                  <AddParticipant />
                ) : (
                  <div className="my-6 rounded bg-white shadow-md">
                    <table className="w-full rounded shadow-lg">
                      <thead>
                        <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                          <th className="py-3 px-6 text-center">أجراءات</th>
                          <th className="py-3 px-6 text-center">
                            {' '}
                            تاريخ بداية الدورة التكوينية
                          </th>
                          <th className="py-3 px-6 text-center">قاعة عدد</th>
                          <th className="py-3 px-6 text-center">
                            {' '}
                            الدورة التكوينية
                          </th>

                          <th className="py-3 px-6 text-center">
                            {' '}
                            العنوان الإلكتروني
                          </th>
                          <th className="py-3 px-6 text-center">
                            الهاتف الجوال
                          </th>

                          <th className="py-3 px-6 text-center">الشركة</th>
                          <th className="py-3 px-6 text-center">
                            الإسم واللقب
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-sm font-light text-gray-600">
                        {participantsData
                          ? participantsData
                              .filter((participant) => {
                                return (
                                  participant.nomPrenom.indexOf(searchTerm) !==
                                  -1
                                );
                              })
                              ?.map(function (participant, i) {
                                return (
                                  <ParticipantCard
                                    key={i}
                                    setUpdateParticipant={setUpdateParticipant}
                                    participant={participant}
                                  />
                                );
                              })
                          : null}
                      </tbody>
                    </table>
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
Participants.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/participants/${id}`);
  const { data } = await res.json();

  return { participants: data };
};

export default Participants;
