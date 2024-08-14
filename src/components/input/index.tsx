import {
  TextInputProps as FlowBiteTextInputProps,
  TextInput as FlowBiteTextInput,
} from "flowbite-react";

interface InputProps extends FlowBiteTextInputProps {}

export const Input = (props: InputProps) => {
  return <FlowBiteTextInput {...props} />;
};
