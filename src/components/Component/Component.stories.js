import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["component-1", "component-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "component-1",
    className: {},
    overlapGroupClassName: {},
    rectangleClassName: {},
    rectangle: "/img/rectangle-8.png",
  },
};
