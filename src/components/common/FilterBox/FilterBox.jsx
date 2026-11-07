import { Checkbox, CheckboxGroup, Surface } from "@heroui/react";
import { GoChevronUp } from "react-icons/go";

function FilterBox() {
  return (
    <Surface className="w-68 rounded-xl py-2.5 px-4.5 border bg-[#FAFAFA] flex items-center flex-col text-[#333333] text-[16px] font-normal">
      <CheckboxGroup name="interests" variant="secondary">
        <div className="w-59.25 border-b border-[#E6E6E6] text-[18px] flex justify-between pb-1.25">
          تکنولوژی
          <GoChevronUp />
        </div>
        <Checkbox value="Boot Strap">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            Boot Strap
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value="React">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            React
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value="java script">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            java script
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value=".Net Core">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            .Net Core
          </Checkbox.Content>
        </Checkbox>
        <Checkbox value="tailwind">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            tailwind
          </Checkbox.Content>
        </Checkbox>
      </CheckboxGroup>
    </Surface>
  );
}

export { FilterBox };
