import {
  Alert,
  ArrowLeftIcon,
  Button,
  Checkbox,
  ExternalLinkIcon,
  InformationCircleIcon,
  Input,
  Label,
  Progress,
  Select,
} from "@/components";

export const PremiseFormSection = () => (
  <div className="basis-1/2">
    <div className="flex w-full p-10">
      <div className="flex flex-col">
        <div className="flex justify-center items-center w-full mb-2">
          <div className="flex w-full items-center gap-1 text-gray-500 text-sm font-semibold self-start">
            <ArrowLeftIcon />
            <span>Back</span>
          </div>
          <div className="w-full">
            <Progress progress={50} className="w-[120px] dark:bg-gray-200" />
          </div>
        </div>
        <h2 className="leading-tight text-2xl font-semibold">
          Specify the business location
        </h2>
      </div>
    </div>
    <form className="pl-10 pr-10">
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Amana"
          className="dark:text-gray-900"
        />
      </div>
      <Select id="Amana" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Municipality"
          className="dark:text-gray-900"
        />
      </div>
      <Select id="Municipality" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
      <div className="flex w-full justify-between gap-4">
        <div className="w-full">
          <div className="mb-2 block">
            <Label
              htmlFor="district"
              value="District"
              className="dark:text-gray-900"
            />
          </div>
          <Input id="district" helperText="Optional" />
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label
              htmlFor="street"
              value="Street"
              className="dark:text-gray-900"
            />
          </div>
          <Input id="street" helperText="Optional" />
        </div>
      </div>

      <div className="flex gap-2 items-center mt-2">
        <Checkbox id="agree" />
        <Label
          htmlFor="agree"
          className="flex dark:text-gray-900 text-sm font-normal"
        >
          My business will be located in a shopping mall
        </Label>
      </div>
      <Alert
        className="mt-6 bg-red-100"
        additionalContent={
          <div className="flex flex-col gap-2">
            <span>
              Select another location or use map based insights to find the best
              one
            </span>{" "}
            <button
              type="button"
              className="mr-2 flex gap-2 max-w-fit  items-center rounded-lg dark:bg-red-700 px-3 py-1.5 text-center text-xs font-medium text-white dark:hover:bg-red-800 dark:focus:ring-red-400"
            >
              View more
              <ExternalLinkIcon
                className="-ml-0.5 mr-2 h-4 w-4"
                color="white"
              />
            </button>
          </div>
        }
        color="danger"
        icon={InformationCircleIcon}
      >
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
      <Button className="mt-6 w-full">
        Continue with restriction acknowledgement
      </Button>
    </form>
  </div>
);
