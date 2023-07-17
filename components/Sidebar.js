import React from 'react';

export default function Sidebar({ cycle, form, format, part, dash }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />

      <div className="min-h-screen flex flex-row bg-gray-100">
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
          </div>
          <ul className="flex flex-col py-4">
            <li
              onClick={() =>
                dash(true) ||
                cycle(false) ||
                part(false) ||
                format(false) ||
                form(false)
              }
            >
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">صفحة الاستقبال</span>
              </a>
            </li>
            <li
              onClick={() =>
                dash(false) ||
                cycle(true) ||
                part(false) ||
                format(false) ||
                form(false)
              }
            >
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-book"></i>
                </span>
                <span className="text-sm font-medium">الدورات</span>
              </a>
            </li>
            <li
              onClick={() =>
                dash(false) ||
                cycle(false) ||
                part(true) ||
                format(false) ||
                form(false)
              }
            >
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-user"></i>
                </span>
                <span className="text-sm font-medium">المشاركون</span>
              </a>
            </li>
            <li
              onClick={() =>
                dash(false) ||
                cycle(false) ||
                part(false) ||
                format(false) ||
                form(true)
              }
            >
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-bx bx-group"></i>
                </span>
                <span className="text-sm font-medium">المدربين</span>
              </a>
            </li>

            <li
              onClick={() =>
                dash(false) ||
                cycle(false) ||
                part(false) ||
                format(true) ||
                form(false)
              }
            >
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class="bx bx-bx bx-chalkboard"></i>
                </span>
                <span className="text-sm font-medium">التكوينات</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="text-sm font-medium">تسجيل خروج</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
