import React from 'react';
import ReactDOM from 'react-dom';
import { registerLicense } from "@syncfusion/ej2-base";

import './index.css';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";


registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn9Td01hW3xWcHdURGBZ');

ReactDOM.render(
  <ContextProvider>
      <App/>
  </ContextProvider>,
  document.getElementById('root')
  );
