"use client"
import Image from "next/image";
import React from "react";
export default function Main() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 bg-red-600">
      <div className="container w-full h-[100vh] flex items-center ">
        <p className="text-justify text-sm md:text-lg font- text-[#ffffff] mx-4">
          ZIA KHAN CEO of Panacloud,the world’s first Integrated API Ownership
          Economy,Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing
          mass education. Mentor and software developer with 20+ years of
          expertise in cloud and serverless computing, software design, project
          management, and API and App development. Expert in concept, business
          modeling & strategy development for startups, specializing in DeFi and
          token economics. Mentored and trained hundreds of thousands of
          developers. Triple masters degrees in business administration,
          engineering, and finance from Arizona State University. Master in
          Economics from KU. Certified Public Accountant and Certified
          Management Accountant in USA. Extensive experience in software
          architecture, design, development, implementation, and integration.
          Worked as a developer in Silicon Valley for 7 years. Hands-on work
          including thousands of hours of development work logged recently
          resulting in multiple successful projects for cutting edge startups
          like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
          Cloudspot, OnSeen, Unicharts, etc.
        </p>
      </div>

      <div className="w-full h-[100vh] flex justify-center items-center relative ">
        <div className="inset-0 absolute bg-sky-900 mix-blend-multiply opacity-30"></div>

        <Image
          src="/Zia-Ullah-Khan-modified.jpg"
          width={500}
          height={500}
          alt="Zia khan"
          quality={100}
          className="rounded-xl shadow-lg shadow-red-900"
        ></Image>
      </div>
    </div>
  );
}
