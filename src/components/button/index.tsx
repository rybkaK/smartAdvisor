import {
  Button as FlowBiteButton,
  ButtonProps as FlowBiteButtonProps,
} from "flowbite-react";

interface ButtonProps extends FlowBiteButtonProps {}

export const Button = (props: ButtonProps) => {
  return <FlowBiteButton {...props} />;
};
