import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Loader from './Loader';
const AddCycle = () => {
  const [form, setForm] = useState({
    nom: '',
    image: '',
    prix: 0,
    description: '',
    formateurun: '',
    formateurdeux: '',
    formateurtrois: '',
    dateDebut: '',
    dateFin: '',
    salle: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys');
      if (Object.keys(errors).length === 0) {
        createCycle();
      } else {
        alert('يرجى ملء الفراغات المطلوبة');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);
  const createCycle = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/cycles', {
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

  return (
    <div className=" mx-auto px-4 py-16 pt-4">
      <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden  font-sans  ">
        <div className="w-full lg:w-5/6">
          <h3 className="mb-8 text-3xl font-medium text-gray-700">
            أضف مدربًا
          </h3>
          <div class="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                className="m-4  rounded bg-white p-20 shadow-xl"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    nom
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nom"
                    type="text"
                    required=""
                    placeholder=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    image
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="image"
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
                    prix
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="prix"
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
                    description
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="description"
                    type="text"
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
                    formateurun
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="formateurun"
                    type="text"
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
                    formateurdeux
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="formateurdeux"
                    type="text"
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
                    formateurtrois
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="formateurtrois"
                    type="text"
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
                    dateDebut
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
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    dateFin
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="dateFin"
                    type="Date"
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
                    Salle
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
                <div className="mt-4">
                  <button
                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                    type="submit"
                  >
                    Ajouter un formateur
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

export default AddCycle;
