import {
  Label as FlowbiteLabel,
  LabelProps as FlowbiteLabelProps,
} from "flowbite-react";

interface LabelProps extends FlowbiteLabelProps {}

export const Label = (props: LabelProps) => {
  return <FlowbiteLabel {...props} />;
};
