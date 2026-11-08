import { Checkbox, CheckboxGroup, Surface } from "@heroui/react";
import { GoChevronUp } from "react-icons/go";

function FilterBox({ filterName, filterItems }) {
  return (
    <Surface className="w-68 rounded-xl py-2.5 px-4.5 border bg-[#FAFAFA] flex items-center flex-col text-[#333333] text-[16px] font-normal">
      <CheckboxGroup name="interests" variant="secondary">
        <div className="w-59.25 border-b border-[#E6E6E6] text-[18px] flex justify-between pb-1.25">
          {filterName}
          <GoChevronUp />
        </div>
        {filterItems.map((item, index) => {
          return (
            <Checkbox key={index} value={item}>
              <Checkbox.Content className="text-[16px] font-normal text-[#333333]">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                {item}
              </Checkbox.Content>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </Surface>
  );
}

export { FilterBox };
