import {
  Progress as FlowbiteProgress,
  ProgressProps as FlowbiteProgressProps,
} from "flowbite-react";

interface ProgressProps extends FlowbiteProgressProps {}

export const Progress = (props: ProgressProps) => {
  return <FlowbiteProgress {...props} />;
};
