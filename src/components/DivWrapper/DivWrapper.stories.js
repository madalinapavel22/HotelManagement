import { DivWrapper } from ".";

export default {
  title: "Components/DivWrapper",
  component: DivWrapper,
  argTypes: {
    property1: {
      options: ["component-8", "component-7"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "component-8",
    className: {},
  },
};
