"use client";
import Image from "next/image";
import Panaverse from "../../public/images.png";
import Navbar from "../components/Navbar/Navbar";
import Main from "./Main/page";
import Courses from "./Courses/page";
import Footer from "@/components/Footer/Footer";
import Teachers from "@/app/Teacher_timeline/Teachers";
import Welcome from "./welcome/page";
export default function Home() {
  return (
    //by default flex direction is row properties are justify content
    // <div className="flex justify-center">
    // <Image src={Panaverse} alt='panaverse'/>
    // {/* <Image src="/images.png" alt="panaverse"/> */}
    // <div>
    //   <h1>Welcome to panaverse</h1>
    //   <h2>A Community of Web 3 and Metaverse Developers</h2>
    //   <button>Learn More</button>
    // </div>
    // </div>

    // <div className="flex justify-center bg-gray-300">
    //   <div className="mx-4 order-last self-center">
    //     <Image src={Panaverse} width={80} height={80} alt="music"/>
    //   </div>
    //   <div className="mx-4 self-center text-center">
    //     <h1 className="text-5xl font-bold text-blue-700">Welcome to Panaverse</h1>
    //     <h2 className="text-3xl font-semibold text-blue-300">A Community of Web and Metaverse</h2>
    //     <button className="my-4 px-4 py-2 border-2 border-black bg-gray-500">click me</button>

    //   </div>
    //   {/* < div class="quote">
    //     <p class="quote">pakistan</p>
    //   </div> */}
    //   <div  className="container min-h-screen grid grid-cols-3 gap-x-6 ">
    //     <div>
    //       <p className="bg-orange-400 p-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione maiores laudantium voluptatem nesciunt officia blanditiis officiis, repellat commodi, atque cupiditate asperiores temporibus ipsa, possimus fugit velit similique molestiae? Eum!</p>
    //     </div>
    //     <div>
    //       <p className="bg-red-400"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione maiores laudantium voluptatem nesciunt officia blanditiis officiis, repellat commodi, atque cupiditate asperiores temporibus ipsa, possimus fugit velit similique molestiae? Eum!</p>
    //     </div>
    //     <div>
    //       <p className="bg-yellow-400"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione maiores laudantium voluptatem nesciunt officia blanditiis officiis, repellat commodi, atque cupiditate asperiores temporibus ipsa, possimus fugit velit similique molestiae? Eum!</p>
    //     </div>
    //     <div>
    //       <p className="bg-green-400"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione maiores laudantium voluptatem nesciunt officia blanditiis officiis, repellat commodi, atque cupiditate asperiores temporibus ipsa, possimus fugit velit similique molestiae? Eum!</p>
    //     </div>

    //   </div>
    <div>
      <Navbar/>
      <Welcome/>
      <Main/>
      <Courses/>
      <Teachers/>
      <Footer/>
    </div>
  );
}
