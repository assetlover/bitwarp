import { useNavigate } from "react-router-dom";
import DashboardAppbar from "./appBar";
import ProjectCard from "./projectCard";

export default function AllProjects() {
  return (
    <div className="bg-zinc-900 h-screen ">
      <DashboardAppbar username={"Jhon Doe"}></DashboardAppbar>
      <div className=" rounded-md p-10 bg-black m-10  flex justify-around  align-around flex-wrap">
        <ProjectCard
          projectName={"Project One"}
          adminName={"Admin one"}
          projectId={"A1B2C3D4"}
        ></ProjectCard>
        <ProjectCard
          projectName={"Project Two"}
          adminName={"Admin one"}
          projectId={"A1B2C3D4"}
        ></ProjectCard>
        <ProjectCard
          projectName={"Project Three"}
          adminName={"Admin Two"}
          projectId={"A1B2C3D4"}
        ></ProjectCard>
      </div>
    </div>
  );
}
