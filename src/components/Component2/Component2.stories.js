import { Component2 } from ".";

export default {
  title: "Components/Component2",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-12", "frame-11", "frame-10"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-12",
    className: {},
  },
};