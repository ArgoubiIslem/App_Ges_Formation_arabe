/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
function Landing() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class=" px-5 py-24 mx-auto">
          <div class="m-auto text-center lg:w-7/12">
            <h2 class="text-2xl text-gray-700 font-bold md:text-4xl">
              فئات التكوين لدينا
            </h2>
          </div>
          <div class=" px-5 py-10 mx-auto"></div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://fullscale.io/wp-content/uploads/2022/04/front-end-developer-job-description.png"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    فئة-1
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    "دورة تدريبية في تطوير الواجهة الأمامية"
                  </h1>
                  <p class="leading-relaxed mb-3">
                    "انضم إلى دورتنا التدريبية لتعلم تطوير الواجهة الأمامية
                    واكتساب مهارات جديدة في بناء تجارب مستخدم مذهلة وحديثة على
                    الويب."
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      تعلم أكثر
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://miro.medium.com/v2/resize:fit:1358/1*3nssFciPfRIZaJfnnFipKA.png"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    فئة-2
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    "دورة تدريبية في تطوير الواجهة الخلفية"
                  </h1>
                  <p class="leading-relaxed mb-3">
                    "احصل على فرصة لتطوير مهاراتك في تطوير الواجهة الخلفية مع
                    دورتنا التدريبية المميزة، واكتسب القدرة على بناء وتحسين
                    التطبيقات والمواقع القوية والموثوقة."
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                      تعلم أكثر
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://www.excelptp.com/wp-content/uploads/2023/05/full-stack-banner-img.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    فئة-3
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    "دورة تدريبية في التطوير الشامل (فول ستاك)"
                  </h1>
                  <p class="leading-relaxed mb-3">
                    "انضم إلى دورتنا التدريبية الشاملة (فول ستاك) واكتسب
                    المهارات اللازمة لتطوير كل من الواجهة الأمامية والخلفية،
                    واستعد لبناء تطبيقات ومواقع ويب متكاملة بإتقان وإبداع."
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                      تعلم أكثر
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
