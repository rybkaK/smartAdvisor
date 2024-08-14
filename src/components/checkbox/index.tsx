import {
  Checkbox as FlowbiteCheckbox,
  CheckboxProps as FlowbiteCheckboxProps,
} from "flowbite-react";

interface CheckboxProps extends FlowbiteCheckboxProps {}

export const Checkbox = (props: CheckboxProps) => {
  return <FlowbiteCheckbox {...props} />;
};
