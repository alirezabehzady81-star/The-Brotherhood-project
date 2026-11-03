import {ColorSwatchPicker} from "@heroui/react";

const colors = ["#F43F5E", "#D946EF", "#8B5CF6"];

export function DefaultValue() {
  return (
    <ColorSwatchPicker defaultValue="#8B5CF6">
      {colors.map((color) => (
        <ColorSwatchPicker.Item key={color} color={color}>
          <ColorSwatchPicker.Swatch />
          <ColorSwatchPicker.Indicator />
        </ColorSwatchPicker.Item>
      ))}
    </ColorSwatchPicker>
  );
}