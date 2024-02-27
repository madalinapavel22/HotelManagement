import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    state: {
      options: ["checked", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "checked",
    className: "",
  },
};
