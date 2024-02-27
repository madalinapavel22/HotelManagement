import { Table } from ".";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    property1: {
      options: ["text-cell", "head-prop", "check"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "text-cell",
    propertyHeadpropClassName: {},
    tableHeadClassName: {},
    text: "<br/>Table head",
  },
};
