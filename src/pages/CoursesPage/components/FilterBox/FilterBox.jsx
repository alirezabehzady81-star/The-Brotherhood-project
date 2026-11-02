// import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { Checkbox, CheckboxControl, CheckboxGroup } from "@heroui/react";

const FilterBox = () => {
  return (
    <div className="w-68 h-45 bg-[#FAFAFA] rounded-xl flex flex-col gap-2.5 items-center py-2.5 px-2.5">
      <div className="leading-3.5 w-59.25 h-6 border-b border-[#ddd] text-[18px] text-[#333333] font-normal flex justify-between">
        تکنولوژی
        <IoIosArrowUp />
      </div>
      <CheckboxGroup className="w-full flex justify-start gap-1.75">
        {/* check box items */}
        <Checkbox value="bootStrap" className="w-26.25 h-5 m-0">
          <Checkbox.Content className="text-[16px] font-normal text-[#333333]">
            <CheckboxControl>
              <Checkbox.Indicator className="border w-4 h-4"/>
            </CheckboxControl>
            Boot Strap
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value="React" className="w-26.25 h-5 m-0">
          <Checkbox.Content className="text-[16px] font-normal text-[#333333]">
            <CheckboxControl>
              <Checkbox.Indicator className="border w-4 h-4" />
            </CheckboxControl>
            React
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value="java script" className="w-26.25 h-5 m-0">
          <Checkbox.Content className="text-[16px] font-normal text-[#333333]">
            <CheckboxControl>
              <Checkbox.Indicator className="border w-4 h-4" />
            </CheckboxControl>
            java script
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value=".Net Core" className="w-26.25 h-5 m-0">
          <Checkbox.Content className="text-[16px] font-normal text-[#333333]">
            <CheckboxControl>
              <Checkbox.Indicator className="border w-4 h-4" />
            </CheckboxControl>
            .Net Core
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value="tailwind" className="w-26.25 h-5 m-0">
          <Checkbox.Content className="text-[16px] font-normal text-[#333333]">
            <CheckboxControl>
              <Checkbox.Indicator className="border w-4 h-4" />
            </CheckboxControl>
            tailwind
          </Checkbox.Content>
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export { FilterBox };
