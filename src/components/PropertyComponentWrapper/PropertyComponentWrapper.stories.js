import { PropertyComponentWrapper } from ".";

export default {
  title: "Components/PropertyComponentWrapper",
  component: PropertyComponentWrapper,
  argTypes: {
    property1: {
      options: ["component-4", "component-5"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "component-4",
    className: {},
  },
};
