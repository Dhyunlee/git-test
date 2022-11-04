import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <RecoilRoot>
        <Suspense fallback={<p>Loading...</p>}>
          <App />
        </Suspense>
      </RecoilRoot>
  </React.StrictMode>
);
