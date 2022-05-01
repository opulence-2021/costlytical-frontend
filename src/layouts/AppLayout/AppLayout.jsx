import { React } from "react";

// Style
import "./AppLayout.css";

// Components
import AppMenu from "./components/app-menu/AppMenu";

export function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <div className="app-sidebar">
        <AppMenu />
      </div>

      <div className="app-content">{children}</div>
    </div>
  );
}
