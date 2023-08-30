"use client";
import Link from 'next/link'
export default function Footer() {
  return (
    <div className=" flex  justify-center  w-full h-1/4 bg-red-700">
      <div className=" relative grid grid-cols-4 items-center gap-3 mt-2 mb-2">
        <Link href="/"><img
          className="mix-blend-luminosity hover:mix-blend-saturation "
          src="/assets/social/icons8-whatsapp-240.png"
          width={50}
          height={50}
        /></Link>
        <Link href="/"><img
          className="mix-blend-luminosity hover:mix-blend-saturation"
          src="/assets/social/icons8-facebook-240.png"
          width={50}
          height={50}
        /></Link>
        <Link href="/"><img
          className="mix-blend-luminosity hover:mix-blend-saturation"
          src="/assets/social/icons8-twitter-circled-240.png"
          width={50}
          height={50}
        /></Link>
        <Link href="/"><img
          className="mix-blend-luminosity hover:mix-blend-saturation"
          src="/assets/social/icons8-linkedin-circled-240.png"
          width={50}
          height={50}
        /></Link>
        <span className='col-span-4 text-center'>All Rights Reserved from @2023</span>
      </div>
      
    </div>
  );
}
