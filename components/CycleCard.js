/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Confirm, Loader } from 'semantic-ui-react';
import EditCycle from '/pages/[id]/EditCycle';

function CycleCard({ cycle }) {
  const [confirm, setConfirm] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const [updateCycle, setUpdateCycle] = useState(false);
  const open = () => setConfirm(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cycleId, setCycleId] = useState();
  const close = () => setConfirm(false);
  const deleteCycle = async () => {
    try {
      await fetch(`http://localhost:3000/api/cycles/${cycle?._id}`, {
        method: 'Delete',
      });
      window.location.reload(true);
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  useEffect(() => {
    if (isDeleting) {
      deleteCycle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting]);

  return (
    <>
      {updateCycle ? (
        <EditCycle setUpdateCycle={setUpdateCycle} cycle={cycleId} />
      ) : (
        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={cycle.image} alt="Hotel Photo" />
            </div>

            <div class="mt-1 p-2">
              <h2 class="text-slate-700"> {cycle.nom}</h2>
              <p class="mt-1 text-sm text-slate-400">
                {cycle.formateurun}/{cycle.formateurdeux}/{cycle.formateurtrois}
              </p>

              <div class="mt-3 flex items-end justify-between">
                <p class="text-lg font-bold text-blue-500">{cycle.prix} DT</p>
                <button onClick={() => setShowConf(true)}>
                  <div className="mr-2 w-6 transform hover:scale-110 hover:text-red-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </button>
                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <button
                    class="text-sm"
                    onClick={() =>
                      !updateCycle
                        ? setUpdateCycle(true) || setCycleId(cycle)
                        : setUpdateCycle(false)
                    }
                  >
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          </a>
        </article>
      )}
      {showConf ? (
        // <div className="fixed top-0 bottom-0 left-0 right-0 mx-auto h-full w-full items-center justify-center bg-gray-600 bg-opacity-70 ">
        //   <div className="mx-auto grid max-w-4xl items-center gap-10 bg-white py-16 px-8">
        //     <p>Do you want to delete ?</p>
        //     <div className="flex justify-between">
        //       <button
        //         onClick={deleteFournisseur}
        //         className="bg-blue-600 bg-opacity-70 px-6 py-2 text-white "
        //       >
        //         Confirm
        //       </button>
        //       <button
        //         onClick={() => setShowConf(false)}
        //         className="bg-blue-600 bg-opacity-70 px-6 py-2 text-white "
        //       >
        //         Cancel
        //       </button>
        //     </div>
        //   </div>
        // </div>
        <div class="fixed left-0 bottom-0 flex h-full w-full items-center justify-center bg-gray-100">
          <div class="w-1/2 rounded-lg bg-white">
            <div class="flex flex-col items-start p-4">
              <div class="flex w-full items-center">
                <div></div>

                <svg
                  onClick={() => setShowConf(false)}
                  class="ml-auto h-6 w-6 cursor-pointer fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>
              <hr />
              <div class="">هل تريد أن تحذف؟</div>
              <hr />
              <div class="ml-auto">
                <button
                  onClick={deleteCycle}
                  class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                >
                  تأكيد
                </button>
                <button
                  onClick={() => setShowConf(false)}
                  class="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-gray-500 hover:text-white"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CycleCard;
