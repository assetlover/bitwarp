import { useNavigate } from "react-router-dom";

const headingonecss = "mt-5 p-2 text-white font-bold text-4xl";
const cardcss =
  "rounded-md shadow-md  max-h-full  bg-[#1F2229] flex flex-col justify-center p-5 shadow-[0px_0px_20px_5px_#000000]";
const headingtwocss = " mt-3 text-lg text-white";
export default function ProjectCard(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={cardcss}>
        <div className=" mb-3 flex flex-col justify-center items-center">
          <p className={headingonecss}>{props.projectName}</p>
        </div>
        <p className={headingtwocss}>{props.projectName}</p>
        <p className={headingtwocss}>Owner : {props.adminName} </p>
        <p className={headingtwocss}>Project Key : {props.projectId}</p>
        <button
          className="mt-10 p-2 bg-zinc-500 text-white text-lg font-semibold  mt-5 rounded   w-full hover:bg-white hover:text-black duration-300 transition:ease "
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Edit Project
        </button>
      </div>
    </div>
  );
}
