import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./App";
// import {registerLicense} from '@syncfusion/ej2-base';

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
