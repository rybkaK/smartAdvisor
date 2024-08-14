import { Timeline } from "flowbite-react";
import { Key, ReactNode } from "react";
import { FaCheckCircle, FaFontAwesomeFlag } from "react-icons/fa";

interface StepperProps {
  steps: Step[];
  activeStepKey: Key;
}

export const Stepper = ({ steps, activeStepKey }: StepperProps) => {
  const renderIcon = (step: Step, index: number) => {
    if (index === steps.length - 1) {
      return (
        <div>
          {" "}
          <FaFontAwesomeFlag className="w-5 h-5" />
        </div>
      );
    }

    if (step.key === activeStepKey) {
      return (
        <div>
          <div className="w-5 h-5 rounded-full border-green-600 border-solid border flex items-center justify-center">
            <div className="text-xs text-[#18908D]">3</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <FaCheckCircle className="w-5 h-5" color="green" />
      </div>
    );
  };

  return (
    <Timeline horizontal className="justify-between w-full">
      {steps.map((step, index) => (
        <Timeline.Item key={step.key} className="w-full">
          <div className="flex items-center gap-2">
            {renderIcon(step, index)}
            <div className="text-sm leading-tight text-[#18908D]">
              {step.label}
            </div>
            {index !== steps.length - 1 && (
              <div className="h-[1px] w-full ml-6 mr-6 bg-gray-400" />
            )}
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

type Step = {
  label: ReactNode | string;
  completed: boolean;
  key: Key;
};
