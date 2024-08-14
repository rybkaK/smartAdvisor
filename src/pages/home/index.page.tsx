import { NextPageWithLayout } from "@/types";

import { getCoreLayout } from "../components/layout/coreLayout";

import React from "react";

import {
  Button,
  Map,
  Input,
  Label,
  Checkbox,
  Progress,
  Alert,
  Select,
  ArrowLeftIcon,
  InformationCircleIcon,
  ExternalLinkIcon,
} from "@/components";
import { HomePageHeader } from "./components/homePageHeader";
import { PremiseFormSection } from "./components/premiseFormSection";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <HomePageHeader />
      <div className="flex w-full h-full gap-12">
        <PremiseFormSection />
        <div className="w-full">
          <Map />
        </div>
      </div>
    </div>
  );
};

Home.getLayout = getCoreLayout;

export default Home;
