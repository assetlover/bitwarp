import { useNavigate } from "react-router-dom";

const headingonecss = "mt-5 p-2 text-white font-bold text-4xl";
const cardcss =
  "rounded-md shadow-md min-h-96 max-h-full min-w-96 max-w-96 bg-[#1F2229] flex flex-col justify-center p-5 shadow-[0px_0px_20px_5px_#000000]";
const inputcss = "rounded mt-2 p-1 min-w-screen border-2";
const headingtwocss = " mt-3 text-lg text-white";

export default function Createproject() {
  const navigate = useNavigate();
  return (
    <div className="bg-cover bg-center h-screen bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] min-h-screen min-w-screen flex flex-row items-center justify-center h-screen">
      <div className={cardcss}>
        <div className=" mb-3 flex flex-col justify-center items-center">
          <p className={headingonecss}>Create Project</p>
          <p className="p-2 text-white text-xl ">Enter a unique name</p>
        </div>

        <p className={headingtwocss}>Project Name</p>
        <input className={inputcss} type="text" placeholder="Example Project" />
        <p className={headingtwocss}>Owner Username</p>
        <input className={inputcss} type="text" placeholder="example_Admin_1" />

        <p className={headingtwocss}>Unique Project Key {`(8 CHAR)`}</p>
        <input className={inputcss} type="text" placeholder="A1B2C3D4" />
        <button className="mt-10 p-2 bg-zinc-500 text-white text-lg font-semibold  mt-5 rounded   w-full hover:bg-white hover:text-black duration-300 transition:ease ">
          Generate Random Key
        </button>
        <div className=" mt-3 flex flex-row items-center justify-center  text-white">
          <p>Already have a project?&nbsp;</p>
          <a
            className="underline underline-offset-1 hover:text-[#0ADD08]"
            onClick={() => {
              navigate("/allprojects");
            }}
          >
            {" "}
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
