import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import AddFormateur from './AddFormateur';
import EditFormateur from '/pages/[id]/EditFormateur';
import FormateurCard from './FormateurCard';
import { getStaticPaths } from 'next';
function Formateurs() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const [formateursData, setFormateursData] = useState(null);
  const [newFormateur, setNewFormateur] = useState(false);
  const [updateFormateur, setUpdateFormateur] = useState(false);
  const [formateurId, setFormateurId] = useState();
  const [frid, setFrid] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/formateurs');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result['data']);
        setFormateursData(result['data']);
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
  const handleExportData = () => {
    // Assuming formateursData is the array of formateur objects
    if (formateursData) {
      exportDataToCSV(formateursData);
    }
  };
  function exportDataToCSV(data) {
    const csvRows = [];

    // Add CSV headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    // Add each row of data as CSV
    data.forEach((item) => {
      const values = headers.map((header) => item[header]);
      csvRows.push(values.join(','));
    });

    // Combine rows into a single CSV string
    const csvString = csvRows.join('\n');

    // Create a Blob and a download link
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formateurs.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className=" ">
      <div className="">
        <div className="absolute top-40 right-4 ">
          {/* <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        > */}
          <button
            onClick={handleExportData}
            className="mr-6 bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded bg-green-500 py-2 px-7 font-bold text-white"
          >
            <span>تصدير البيانات</span>
          </button>
          <button
            onClick={() =>
              !newFormateur ? setNewFormateur(true) : setNewFormateur(false)
            }
            className=" mr-3 bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded bg-blue-600 py-2 px-4 font-bold text-white"
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
            <span> اضافة مدرب</span>
          </button>

          {/* </Link> */}
        </div>
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700  ">
              قائمة المدربين
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
            {updateFormateur ? (
              <EditFormateur formateur={formateurId} />
            ) : (
              <div className="mt-10">
                {newFormateur ? (
                  <AddFormateur />
                ) : (
                  <div className="my-6 rounded bg-white shadow-md">
                    <table className="w-full rounded shadow-lg">
                      <thead>
                        <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                          <th className="py-3 px-6 text-center">أجراءات</th>
                          <th className="py-3 px-6 text-center">الشركة</th>
                          <th className="py-3 px-6 text-center">الإدارة</th>
                          <th className="py-3 px-6 text-center">التخصص</th>
                          <th className="py-3 px-6 text-center">
                            الإسم واللقب
                          </th>
                          <th className="py-3 px-6 text-left">#</th>
                        </tr>
                      </thead>

                      <tbody className="text-sm font-light text-gray-600">
                        {formateursData
                          ? formateursData
                              .filter((formateur) => {
                                return (
                                  formateur.nomPrenom.indexOf(searchTerm) !== -1
                                );
                              })
                              ?.map(function (formateur, i) {
                                return (
                                  <FormateurCard
                                    key={i}
                                    setUpdateFormateur={setUpdateFormateur}
                                    formateur={formateur}
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
Formateurs.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/formateurs/${id}`);
  const { data } = await res.json();

  return { formateurs: data };
};

export default Formateurs;
