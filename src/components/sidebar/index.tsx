import { mergeClasses } from "@/utils";
import {
  Sidebar as FlowBiteSidebar,
  SidebarProps as FlowBiteSidebarProps,
  SidebarLogoProps as FlowBiteSidebarLogoProps,
  Flowbite,
  SidebarItemsProps as FlowBiteSidebarItemsProps,
  SidebarItemProps as FlowBiteSidebarItemProps,
  SidebarItemGroupProps as FlowBiteSidebarItemGroupProps,
} from "flowbite-react";

interface SidebarProps extends FlowBiteSidebarProps {
  innerClassName?: string;
}

export const Sidebar = ({ innerClassName, ...props }: SidebarProps) => {
  return (
    <Flowbite
      theme={{
        theme: {
          sidebar: {
            root: {
              inner: mergeClasses(
                "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800",
                innerClassName,
              ),
            },
          },
        },
      }}
    >
      <FlowBiteSidebar {...props} />
    </Flowbite>
  );
};

interface SidebarItemGroupProps extends FlowBiteSidebarItemGroupProps {}

const SidebarItemGroup = (props: SidebarItemGroupProps) => (
  <FlowBiteSidebar.ItemGroup {...props} />
);

Sidebar.ItemGroup = SidebarItemGroup;

interface SidebarLogoProps extends FlowBiteSidebarLogoProps {}

const SidebarLogo = (props: SidebarLogoProps) => (
  <FlowBiteSidebar.Logo {...props} />
);

Sidebar.Logo = SidebarLogo;

interface SidebarItemsProps extends FlowBiteSidebarItemsProps {}

const SidebarItems = (props: SidebarItemsProps) => (
  <FlowBiteSidebar.Items {...props} />
);

Sidebar.Items = SidebarItems;

interface SidebarItemProps extends FlowBiteSidebarItemProps {}

const SidebarItem = (props: SidebarItemProps) => (
  <FlowBiteSidebar.Item {...props} />
);

Sidebar.Item = SidebarItem;
