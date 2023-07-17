import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Loader from '../../components/Loader';
import { getStaticPaths } from 'next';
const EditFormateur = ({ formateur, setUpdateFormateur }) => {
  console.log(formateur);
  const [form, setForm] = useState({
    nomPrenom: formateur?.nomPrenom,
    specialite: formateur?.specialite,
    direction: formateur?.direction,
    entreprise: formateur?.entreprise,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys');
      if (Object.keys(errors).length === 0) {
        updateFormateur();
      } else {
        alert('please fill the required fields !');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);
  const updateFormateur = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/formateurs/${formateur?._id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );
      setTimeout(() => {
        setIsLoading(false);
        alert('Modification avec success');
      }, 500);
      console.log('Modifier !' + JSON.stringify(form));
      // router.push('/')
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    window.location.reload(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div
        onClick={() => setUpdateFormateur(false)}
        className="fixed bottom-0 left-0 right-0 top-0 bg-gray-500 bg-opacity-40 "
      ></div>
      <div className="fixed  z-50 mx-auto -my-32 flex w-full max-w-4xl items-center justify-center overflow-hidden font-sans   ">
        <div className="w-full max-w-4xl lg:w-5/6">
          <div className="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                className="m-4  rounded bg-white p-20 shadow-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-8 text-3xl font-medium text-gray-700">
                  تعديل المعلومات
                </h3>
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    الإسم واللقب
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nomPrenom"
                    value={form.nomPrenom}
                    type="text"
                    aria-label="nomPrenom"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    التخصص
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="specialite"
                    value={form.specialite}
                    type="text"
                    required=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className=" block text-sm text-gray-600"
                    for="cus_email"
                  >
                    الإدارة
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="direction"
                    type="text"
                    value={form.direction}
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className=" block text-sm text-gray-600"
                    for="cus_email"
                  >
                    الشركة
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="entreprise"
                    type="text"
                    value={form.entreprise}
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-4">
                  <button
                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                    type="submit"
                  >
                    تحديث
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
EditFormateur.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/formateurs/${id}`);
  const { data } = await res.json();

  return { formateur: data };
};
export default EditFormateur;
