import React from 'react';
import FormLogin from '../components/login/FormLogin.jsx';
import Slider from '../components/login/Slider.jsx';
import Loading from '../components/loading/Loading.jsx';

function Login() {

  return (
    <>
    <Loading/>
    <div className="min-h-screen flex items-stretch text-white">
        <Slider/>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1671767054785-e9bee988f6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80)" }}>
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-5xl font-bold  tracking-wide">
          Magic Journey
          </h1>
          {/*
          <div className="py-6 space-x-2">
            
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
          </div>
          <p className="text-gray-100">
            or use email your account
          </p>
*/}
        <FormLogin/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
