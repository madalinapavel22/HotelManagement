import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DesktopScreen } from "./screens/DesktopScreen";
import { Desktop } from "./screens/Desktop";
import { Screen2 } from "./screens/Screen2";
import { Screen3 } from "./screens/Screen3";
import { Section } from "./screens/Section";
import { SectionScreen } from "./screens/SectionScreen";
import { SectionWrapper } from "./screens/SectionWrapper";
import { MyRoom}  from "./screens/MyRoom";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DesktopScreen />,
  },
  {
    path: "/desktop-1",
    element: <DesktopScreen />,
  },
  {
    path: "/desktop-5",
    element: <Desktop />,
  },
  {
    path: "/desktop-2",
    element: <Screen2 />,
  },
  {
    path: "/desktop-6",
    element: <Screen3 />,
  },
  {
    path: "/section-3",
    element: <Section />,
  },
  {
    path: "/section-2",
    element: <SectionScreen />,
  },
  {
    path: "/section-1",
    element: <SectionWrapper />,
  },
  {
    path: "/MyRoom",
    element: <MyRoom />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
