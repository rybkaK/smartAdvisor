import { ReactNode } from "react";
import { HiDocumentAdd } from "react-icons/hi";

import { Sidebar } from "@/components";

interface CoreLayoutProps {
  children?: ReactNode;
}

export const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <div className="flex bg-white">
      <Sidebar
        className="min-h-screen w-[250px]"
        innerClassName="min-h-screen flex flex-col"
      >
        <div className="w-full">
          <h3 className="font-semibold text-lg text-white">Smart Advisor</h3>
        </div>
        <Sidebar.Items className="pt-12 h-[100%] flex flex-col flex-1">
          <Sidebar.ItemGroup className="flex-auto">
            <Sidebar.Item
              className="bg-[#FFFFFF33]"
              href="#"
              icon={() => <HiDocumentAdd className="w-6 h-6" color="white" />}
            >
              New scenario
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              className="bg-[#FFFFFF33]"
              href="#"
              icon={() => <HiDocumentAdd className="w-6 h-6" color="white" />}
            >
              Support
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="h-screen w-full overflow-y-auto pb-4">{children}</div>
    </div>
  );
};

export const getCoreLayout = (page: ReactNode) => (
  <CoreLayout>{page}</CoreLayout>
);
