// import React from 'react'

const Menu = () => {
  return (
    <div className=" w-116 h-11.75 ">
      <div className="relative  w-150 h-10 flex flex-row items-center gap-10 px-2      ">
        <div
          style={{
            fontFamily: "revert",
            color: "#555555",
            display: "flex",
            flexWrap: "wrap",
            gap: "35px",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "17px",
          }}
        >
          <span className="relative cursor-pointer text-[#555] transition-colors duration-300 hover:text-[#00C7C7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#F59E0B] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            صفحه نخست
          </span>
          <span className="relative cursor-pointer text-[#555] transition-colors duration-300 hover:text-[#00C7C7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#F59E0B] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            دوره ها
          </span>
          <span className="relative cursor-pointer text-[#555] transition-colors duration-300 hover:text-[#00C7C7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#F59E0B] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            اساتید
          </span>
          <span className="relative cursor-pointer text-[#555] transition-colors duration-300 hover:text-[#00C7C7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#F59E0B] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            اخبار و مقالات
          </span>
          <span className="relative cursor-pointer text-[#555] transition-colors duration-300 hover:text-[#00C7C7] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#F59E0B] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            تماس با ما
          </span>
        </div>
      </div>
    </div>
  );
};

export { Menu };
