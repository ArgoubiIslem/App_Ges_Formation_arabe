import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Loader from './Loader';
import { Select } from '@material-ui/core';
const Insc = ({ cycle }) => {
  const [cyclesData, setCyclesData] = useState(null);

  const [form, setForm] = useState({
    nomPrenom: '',
    entreprise: '',
    fix: 0,
    fax: 0,
    tel: 0,
    mail: '',
    cycle: '',
    salle: 0,
    dateDebut: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys');
      if (Object.keys(errors).length === 0) {
        createParticipant();
      } else {
        alert('يرجى ملء الفراغات المطلوبة');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);
  const createParticipant = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/participants', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setTimeout(() => {
        setIsLoading(false);
        alert('تم إنشاؤه بنجاح');
      }, 500);
      console.log('created !' + JSON.stringify(form));
      // router.push('/')
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
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

  return (
    <div className=" mx-auto px-4 py-16 pt-4">
      <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden  font-sans  ">
        <div className="w-full lg:w-5/6">
          <h3 className="mb-8 text-3xl font-medium text-gray-700">أضف مشارك</h3>
          <div class="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                className="m-4  rounded bg-white p-10 shadow-xl grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    الإسم واللقب
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nomPrenom"
                    type="text"
                    required=""
                    placeholder=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    الشركة
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="entreprise"
                    type="text"
                    required=""
                    placeholder=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    الهاتف القار
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="fix"
                    type="Number"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    الفاكس
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="fax"
                    type="Number"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>{' '}
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    الهاتف الجوال
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="tel"
                    type="Number"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    العنوان الإلكتروني
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="mail"
                    type="email"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    الدورة التكوينية
                  </label>

                  <Select
                    name="cycle"
                    onChange={handleChange}
                    className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300"
                  >
                    {cyclesData
                      ? cyclesData.map(function (cycle, i) {
                          return (
                            <option
                              key={i}
                              name="cycle"
                              value={cycle.nom}
                              onChange={handleChange}
                            >
                              {cycle.nom}
                            </option>
                          );
                        })
                      : null}
                  </Select>
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    الفصل
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="salle"
                    type="Number"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    تاريخ بداية الدورة التكوينية
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="dateDebut"
                    type="Date"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <button
                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                    type="submit"
                  >
                    أضف مشارك
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insc;
