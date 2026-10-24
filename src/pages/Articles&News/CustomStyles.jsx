
import { Select} from "@heroui/react"

export function CustomStyless() {
  return (
    <Select className="w-[207px] relative "  placeholder="جدید ترین" variant="secondary">
      
      <Select.Trigger className="rounded-xl bg-default">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>

    </Select>
  );
}
