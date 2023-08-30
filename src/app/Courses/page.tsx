"use client"
import Link from "next/link";
import Rive from '@rive-app/react-canvas';
import Image from "next/image";
import Zoom from "react-awesome-reveal";

export default function Courses() {
  return (
    <div className="relative">
      <div className="inset-0 absolute bg-gray-800 bg-opacity-75"></div>
<div className="grid  grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 p-8 justify-center custom-image bg-fixed bg-center bg-cover">
       <Zoom> <div className="card-container relative bg-opacity-10 shadow-5xl border-r-0 border-b-0 border-1  backdrop-filter backdrop-blur-sm rounded-lg bg-white">
          <h1 className="text-center font-lora text-2xl text-[#fcb900]">
            Quarter I (Core)
            <br /> Web3 and Metaverse
          </h1>
          <h2 className="text-center text-white m-2">
            CS-101: Object-Oriented Programming using TypeScrip
          </h2>
          <h3 className="text-center">Duration: 13 Weeks</h3>
          <h3 className="text-center ">Course Description</h3>
          <p className="text-left text-md m-3 font-Railway text-white line-clamp-5">
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </p>
          <h1 className="text-center font-lora1 text-2xl  w-full col-span-6 text-[#fcb900]">
            Course Technologies
          </h1>
          <div className=" tec-container grid grid-cols-4 grid-rows-1 gap-4 ">

          <div className="relative group">
            <div className=" bg-orange-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:drop-shadow-[35px_35px_35px_rgba(255,240,0,0.25)] "
                src="icons8-html-5-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-cyan-300 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className=" shadow-cyan-400 hover:shadow-indigo-500/40 rounded-full"
                src="icons8-css3-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-yellow-300 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:drop-shadow-[35px_35px_35px_rgba(255,240,0,0.25)] "
                src="icons8-javascript-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-cyan-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:drop-shadow-[35px_35px_35px_rgba(255,240,0,0.25)] "
                src="icons8-typescript-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-gray-800 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:drop-shadow-[35px_35px_35px_rgba(255,240,0,0.25)] "
                src="rive.png"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-cyan-300 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:drop-shadow-[35px_35px_35px_rgba(255,240,0,0.25)] "
                src="Aragon.png"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-gradient-to-tr from-cyan-300 to-purple-400 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:drop-shadow-[35px_35px_35px_rgba(255,240,0,0.25)] "
                src="Aave.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-gradient-to-tr from-cyan-300 to-purple-400 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:drop-shadow-[35px_35px_35px_rgba(255,240,0,0.25)] "
                src="ENS Domain.png"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container relative bg-opacity-10 shadow-5xl border-r-0 border-b-0 border-1 border-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg bg-white">
        <h1 className="text-center font-lora text-2xl text-[#fcb900]">
          Quarter II (Core)
          <br /> Web3 and Metaverse
        </h1>
        <h2 className="text-center text-white m-2 line-clamp-1">
          Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless
          Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
          for Terraform
        </h2>
        <h3 className="text-center">Duration: 13 Weeks</h3>
        <h3 className="text-center">Course Description</h3>
        <p className="text-left text-md m-3 font-Railway text-white line-clamp-5">
          The objective of this course is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
          Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
        </p>
        <div className="flex justify-center underline font-lora1">
          <Link href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db?gi=ec496ca76335">
            Reasons For Learning Web 2 Before Web 3.0
          </Link>
        </div>
        <h1 className="text-center font-lora1 text-2xl  w-full col-span-6 text-[#fcb900]">
          Course Technologies
        </h1>
        <div className=" tec-container grid grid-cols-4 grid-rows-1 gap-4 ">
          <div className="relative group">
            <div className="bg-green-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-node-js-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className="bg-cyan-400 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-react-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gray-200 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-next.js-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className=" bg-cyan-700 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-typescript-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-green-300 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-chakra-ui-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-purple-600 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-figma-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className=" bg-emerald-400 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="trpc-logo (1).png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className=" bg-orange-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="Metamask-icon (1).png"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card-container relative bg-opacity-10 shadow-5xl border-r-0 border-b-0 border-1 border-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg bg-white">
        <h1 className="text-center font-lora text-2xl text-[#fcb900]">
          Quarter III
          <br /> Web3 and Metaverse
        </h1>
        <h2 className="text-center text-white line-clamp-1">
          W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
        </h2>
        <h3 className="text-center">Duration: 13 Weeks</h3>
        <h3 className="text-center">Course Description</h3>
        <p className="text-left text-md m-3 font-Railway text-white line-clamp-5">
          In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.
        </p>
        <div className="flex justify-center underline font-lora1">
          <Link href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db?gi=ec496ca76335">
            Reasons For Learning Web 2 Before Web 3.0
          </Link>
        </div>
        <h1 className="text-center font-lora1 text-2xl  w-full col-span-6 text-[#fcb900]">
          Course Technologies
        </h1>
        <div className=" tec-container grid grid-cols-4 grid-rows-1 gap-4 ">
          <div className="relative group">
            <div className="bg-cyan-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900  justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow"
                src="icons8-tailwind-css-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className="bg-cyan-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="pngegg (1).png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gray-900 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-uniswap-64 (1).png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className=" bg-cyan-400 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-postgresql-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-amber-300 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-amazon-web-services-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="relative group">
            <div className=" bg-pink-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-graphql-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className=" bg-emerald-400 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="icons8-prisma-orm-240.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative group">
            <div className=" bg-orange-500 blur-md rounded-lg absolute group-hover:-inset-1"></div>
            <div className="bg-slate-800 relative hover:mix-blend-luminosity border-2 border-gray-900 justify-center rounded-xl p-3 m-1">
              <img
                className="hover:shadow "
                src="Metamask-icon (1).png"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div></Zoom>
    </div>
    </div>
  );
}
