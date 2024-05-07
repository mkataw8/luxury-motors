import React from "react";
import finance from "./finance.png";

function Works() {
  return (
    <section id="payment" className=" rw-full bg-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[400px] mx-auto" src={finance} />
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-[blue] text-xl">Finance Dashboard</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
              Manage your Finance Free
            </h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
