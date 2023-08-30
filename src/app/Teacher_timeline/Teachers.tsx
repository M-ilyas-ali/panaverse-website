"use client"
export default function Teachers() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#1d1d1d] antialiased text-gray-800 ">
        <div className=" container relative mx-auto px-6 flex flex-col space-y-8">
          <div className="timeline"></div>
          <div className="relative z-10 ">
            <img src="/danial3.jpg" alt="teacher1" className="timeline-image" />
            <div className="left-card">
              <div
                className=" absolute h-4 w-4 pt-8 transform rotate-45 bg-slate-300 inset-0 left-9 md:left-16 xs:left-28 xs:top-4"
                aria-hidden="true"
              ></div>
              <div className="bg-slate-300 rounded-lg  font-Railway shadow-md p-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quidem officiis quisquam enim nobis itaque eligendi
                hic, excepturi alias ipsum iure praesentium impedit eaque esse
                corporis dolores, nesciunt exercitationem? Illum.
              </div>
            </div>
          </div>
        </div>
        <div className=" container relative mx-auto px-6 flex flex-col space-y-8">
          <div className="timeline"></div>
          <div className="relative z-10 ">
            <img src="/danial3.jpg" alt="teacher1" className="timeline-image" />
            <div className="right-card">
              <div
                className=" absolute h-4 w-4 pt-8 transform rotate-45 bg-slate-300 inset-0 left-90 md:left-16 xs:left-28 xs:top-4"
                aria-hidden="true"
              ></div>
              <div className="bg-slate-300 rounded-lg  font-Railway shadow-md p-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quidem officiis quisquam enim nobis itaque eligendi
                hic, excepturi alias ipsum iure praesentium impedit eaque esse
                corporis dolores, nesciunt exercitationem? Illum.
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
