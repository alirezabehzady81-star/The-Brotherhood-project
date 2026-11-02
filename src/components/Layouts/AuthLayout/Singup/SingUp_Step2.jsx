// import React from 'react'
import { Field, Form, Formik } from "formik";
import { BackToLastStepBtn } from "./components/BackToLastStepBtn";

const SingUp_Step2 = () => {
  return (
    <div className="flex justify-center">
      <div className="w-238 h-157.75 flex justify-around">
        <div className="flex flex-col gap-17 py-25.5 text-[24px] text-[#006865] font-bold text-left">
          <div>ثبت نام</div>
          <div>ورود</div>
        </div>
        <div className="relative flex items-center justify-center w-217.25 h-157.75 bg-[url(../../../../../../public/images/Layout/AuthLayout/Rectangle81.svg)] bg-no-repeat bg-contain">
          {/* form */}
          <div className="text-center flex flex-col items-center gap-10 justify-center w-97.25 h-100 bg-[url(../../../../../../../public/images/Layout/AuthLayout/RectangleStep2.svg)] bg-position-[50%] bg-cover bg-no-repeat rounded-[15px]">
            <h2 className="block text-[#005351] text-[25px] font-bold">
              کد تایید
            </h2>
            <div className="text-[13px] font-normal ">
              <p>
                کد تایید به شماره
                <span dir="ltr" className="text-[#008A86]">
                  {" "}
                  +989336414606{" "}
                </span>
                ارسال شده است
              </p>
              <p>
                در صورت مغایرت روی{" "}
                <span className="text-[#008A86]"> ویرایش </span> کلیک کنید
              </p>
            </div>
            {/* phone number form */}
            <Formik>
              <Form className="flex flex-col items-center gap-1.5">
                <Field className="mb-10 w-66.5 h-11.75 rounded-[9px] border border-[#ddd] inset-shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-[#F7F7F7] indent-5 text-[12px] font-bold" />
                <button className="bg-[#E48900] w-33.25 h-8.75 rounded-[21px] text-white text-center text-[13px] font-bold leading-8.75">
                  ایجاد حساب
                </button>
                <button className="text-[#008E8B] text-[12px] font-bold">
                  دریافت دوباره کد
                </button>
              </Form>
            </Formik>
          </div>
          <div className="w-15 h-15 relative -right-3 top-1.25 bg-[url(../../../../../../../public/images/Layout/AuthLayout/Rectangle85.svg)] bg-no-repeat bg-cover text-center leading-15 text-[20px] text-[#D47300]">
            2
          </div>
          <BackToLastStepBtn />
        </div>
      </div>
    </div>
  );
};

export { SingUp_Step2 };
