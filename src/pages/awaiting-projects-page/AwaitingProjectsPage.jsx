import { React } from "react";
import { useRouteMatch } from "react-router-dom";

// Styles
import "./AwaitingProjectsPage.css";

// Layouts
import { AppLayout } from "../../layouts/AppLayout/AppLayout";

// Components
import EmptyProjects from "./components/EmptyProjects/EmptyProjects";
import ListProjects from "./components/ListProjects/ListProjects";

export default function AwaitingProjectsPage() {
  const { url } = useRouteMatch();

  let projects = [1];

  return (
    <>
      <AppLayout>
        {projects.length > 0 ? <ListProjects /> : <EmptyProjects />}
      </AppLayout>
    </>
  );
}
