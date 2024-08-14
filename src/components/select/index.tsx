import {
  Select as FlowbiteSelect,
  SelectProps as FlowbiteSelectProps,
} from "flowbite-react";

interface SelectProps extends FlowbiteSelectProps {}

export const Select = (props: SelectProps) => {
  return <FlowbiteSelect {...props} />;
};
