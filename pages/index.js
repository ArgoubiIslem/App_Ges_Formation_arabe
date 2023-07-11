import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';

import Script from 'next/script';
import { useRouter } from 'next/router';

import nc from 'next-connect';
import React, { useContext, useEffect, useState } from 'react';
export default function Home() {
  useEffect(() => {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.container');

    const handleSignUp = () => {
      container.classList.add('sign-up-mode');
    };

    const handleSignIn = () => {
      container.classList.remove('sign-up-mode');
    };

    sign_up_btn.addEventListener('click', handleSignUp);
    sign_in_btn.addEventListener('click', handleSignIn);

    // Cleanup the event listeners
    return () => {
      sign_up_btn.removeEventListener('click', handleSignUp);
      sign_in_btn.removeEventListener('click', handleSignIn);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">تسجيل الدخول</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>

                <input type="email" placeholder="ادخل اسم المستخدم" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="أدخل كلمة المرور" />
              </div>
              <input type="submit" value="تسجيل الدخول" className="btn solid" />
              <p className="social-text">
                أو قم بتسجيل الدخول باستخدام المنصات الاجتماعية
              </p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">اشتراك</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="دخل اسم المستخدم" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="بريد إلكتروني" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="كلمة المرور" />
              </div>
              <input type="submit" className="btn" value="اشتراك" />
              <p className="social-text">أو اشترك مع المنصات الاجتماعية</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>جديد هنا ؟</h3>
              <p>
                مرحبًا بك في صفحة تسجيل الدخول! نحن سعداء جدًا بتواجدك هنا. يرجى
                إكمال الخطوات التالية لإنشاء حسابك الجديد والانضمام إلى مجتمعنا
                الرائع. سوف نوجهك خطوة بخطوة في هذه العملية السهلة والميسرة.
                دعنا نبدأ رحلتك في الانضمام إلينا واكتشاف الفوائد الكثيرة التي
                يقدمها حسابك الجديد.
              </p>
              <button className="btn transparent" id="sign-up-btn">
                تسجيل
              </button>
            </div>

            <Image
              src="/login.svg"
              width={500}
              height={500}
              className="image"
              alt="Picture of the author"
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>واحد منا ؟</h3>
              <p>
                اكتشف ما ينتظرك! انضم إلينا الآن واستفد من مزايا التسجيل. اتبع
                الإرشادات أدناه لإنشاء حسابك الشخصي والبدء في تجربة فريدة من
                نوعها.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                تسجيل الدخول
              </button>
            </div>
            <Image
              src="/signup.svg"
              width={500}
              height={500}
              className="image"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <Script
        src="https://kit.fontawesome.com/64d58efce2.js"
        crossorigin="anonymous"
      />
    </div>
  );
}
