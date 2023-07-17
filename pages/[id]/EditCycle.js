import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Loader from '../../components/Loader';

const EditCycle = ({ cycle, setUpdateCycle }) => {
  console.log(cycle);
  const [form, setForm] = useState({
    nom: cycle?.nom,
    image: cycle?.image,
    prix: cycle?.prix,
    description: cycle?.description,
    formateurun: cycle?.formateurun,
    formateurdeux: cycle?.formateurdeux,
    formateurtrois: cycle?.formateurtrois,
    dateDebut: cycle?.dateDebut,
    dateFin: cycle?.dateFin,
    salle: cycle?.salle,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys');
      if (Object.keys(errors).length === 0) {
        updateCycle();
      } else {
        alert('please fill the required fields !');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);
  const updateCycle = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/cycles/${cycle?._id}`,
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
        onClick={() => setUpdateCycle(false)}
        className="fixed bottom-0 left-0 right-0 top-0 bg-gray-500 bg-opacity-40 "
      ></div>
      <div className="fixed  z-50 mx-auto -my-32 flex w-full max-w-4xl items-center justify-center overflow-hidden font-sans   ">
        <div className="w-full max-w-4xl lg:w-5/6">
          <div className="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                className="m-4  rounded bg-white p-10 shadow-xl grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-8 text-3xl font-medium text-gray-700">
                  تعديل المعلومات
                </h3>
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    االدورة التكوينية{' '}
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nom"
                    value={form.nom}
                    type="text"
                    aria-label="nomPrenom"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    صورة االدورة التكوينية
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="image"
                    value={form.image}
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
                    الثمن
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="prix"
                    type="text"
                    value={form.prix}
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
                    وصف االدورة التكوينية
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="description"
                    type="text"
                    value={form.description}
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
                    مكون عددد1
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="formateurun"
                    type="text"
                    value={form.formateurun}
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
                    مكون عددد2
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="formateurdeux"
                    type="text"
                    value={form.formateurdeux}
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
                    مكون عددد3
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="formateurtrois"
                    type="text"
                    value={form.formateurtrois}
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
                    تاريخ البداية
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="dateDebut"
                    type="Date"
                    value={form.dateDebut}
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
                    تاريخ النهاية
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="dateFin"
                    type="Date"
                    value={form.dateFin}
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
                    رقم الصف
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="salle"
                    type="Number"
                    value={form.salle}
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
EditCycle.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/cycles/${id}`);
  const { data } = await res.json();

  return { cycle: data };
};
export default EditCycle;
