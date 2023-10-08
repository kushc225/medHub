"use client";
import Lottie from "react-lottie";
import Link from "next/link";
import animationData1 from "../animation/b.json";
import animationData2 from "../animation/animation_ln8g3xlw.json";
import "./home.css";
export default function Home() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="flex flex-col mt-5 lg:flex-row ml-4 ">
        {/* content  */}

        <div className="w-2/2 mt-12 lg:w-4/6 ">

          <p className="text-3xl  pl-4 lg:text-5xl font-sans  tracking-wide home_page_para">
            At
            <span className="font-cursive font-bold text-5xl ml-2 text-yellow-300">
              Medihub,
            </span>
            we hold a deep-rooted belief in the fundamental principle that
            healthcare is a basic human right. We are fueled by the unwavering
            conviction that access to quality healthcare should never be
            determined by one's financial circumstances.
          </p>
          <div className="brder-2 border-red-500 flex mt-12 ml-3 mx-2 home_button">
            <button className="bg-yellow-300 mx-2 rounded-xl px-7 py-4 "><Link href="/about">Donate  </Link></button>
            <button className="bg-yellow-300 mx-2 rounded-xl px-7 py-4 "><Link href="/about">Read More</Link></button>
          </div>
        </div>
        {/* images */}

        <div className="flex w-auto lg:w-4/6">
          <Lottie className="lg:ml-48" options={defaultOptions2} height={400} width={400} />
        </div>
      </div>
    </>
  );
}
