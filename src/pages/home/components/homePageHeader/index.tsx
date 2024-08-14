import { SaudiArabiaFlagIcon, Stepper } from "@/components";

const steps = [
  { label: "Basics", completed: true, key: "Basics" },
  { label: "Activities", completed: true, key: "Activities" },
  { label: "Premise", completed: true, key: "Premise" },
  { label: "Results", completed: false, key: "Results" },
];

export const HomePageHeader = () => {
  return (
    <header className="flex w-full justify-between items-start p-10 border border-gray-50">
      <Stepper steps={steps} activeStepKey={steps[2].key} />
      <div className="flex gap-2 items-center">
        <SaudiArabiaFlagIcon />
        <span>العربية</span>
      </div>
    </header>
  );
};
