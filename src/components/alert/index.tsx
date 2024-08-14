import {
  Alert as FlowbiteAlert,
  AlertProps as FlowbiteAlertProps,
} from "flowbite-react";

interface AlertProps extends FlowbiteAlertProps {}

export const Alert = (props: AlertProps) => {
  return <FlowbiteAlert {...props} />;
};
