// import React from 'react'

const SearchBox = () => {
  return (
    <div className="w-139.5 h-16 relative">
      <input
        className="border border-[#DFDFDF80] w-full h-full rounded-[35px] bg-[#FAFAFA] indent-12 text-[18px] text-[#000000]"
        placeholder="چی میخوای یاد بگیری؟..."
      />
      <button className="rounded-[25px] w-12.5 h-12.5 bg-[#D47300] bg-[url(../../../../../../public/images/common/Search.svg)] bg-no-repeat bg-position-[50%] absolute left-[7.5px] top-[7.5px] hover:cursor-pointer"></button>
    </div>
  );
};

export { SearchBox };
