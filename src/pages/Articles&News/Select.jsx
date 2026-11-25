import { ListBox, Select } from "@heroui/react"; // import خودت رو نگه دار
import { useEffect, useState } from "react";

const dataMap = [
  { value: 5, text: "تعداد 5" },
  { value: 8, text: "تعداد 8" },
  { value: 12, text: "تعداد 12" },
];

export default function SelectProduct({ value, onChange }) {



const [selectValue,setSelectValue] = useState(String(value))
// console.log(selectValue)
useEffect(()=>{
onChange(selectValue)

},[selectValue])
  

  return (
    <Select
      placeholder="Select one"
      value={selectValue}
      onChange={(value)=>{
setSelectValue(value)

      }
      }
    >
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>

      <Select.Popover>
        <ListBox>
          {dataMap.map((item) => (
            <ListBox.Item
              key={item.value}
              id={String(item.value)}
              textValue={item.text}
            >
              {item.text}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}