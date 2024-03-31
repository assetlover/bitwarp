import { render } from "react-dom";
import "antd/dist/reset.css";
import { Tree } from "antd";
import AceEditor from "react-ace";
import Button from "@mui/material/Button";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import { Hidden } from "@mui/material";

const bodycss = " h-fit bg-zinc-500  flex flex-row";
const Filesystemcss = "bg-black text-white duration-500";
const Editorcss = "bg-zinc-400 h-screen w-9/12 mx-1";

const communicationcss =
  " flex flex-col justify-between bg-white w-2/12 flex flex-col bg-zinc-800 text-white";
const treeData = [
  {
    title: "Main file structure",
    key: "MainStructure",
    children: [
      {
        title: "Layouts",
        key: "layoutFolder",
        children: [
          //child element
          {
            title: "MainLayout.js",
            key: "mainlayout.js",
          },
        ],
      },
      { title: "index.js", key: "index.js" },
    ],
  },
];
export default function Dashboard() {
  return (
    <div className={bodycss}>
      <div className={Filesystemcss}>
        <p>Project One </p>
        <Tree multiple treeData={treeData} />
      </div>
      <div className={Editorcss}>
        <AceEditor
          wrapEnabled={true}
          height="100%"
          width="100%"
          mode="java"
          theme="github_dark"
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={true}
          name="UNIQUE_ID_OF_DIV"
          showGutter={true}
          fontSize={16}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div className={communicationcss}>
        Communication and ai assitant here
        <div>
          <input
            type="text"
            className="bg-black text-white w-full rounded-md my-2"
            placeholder="Your Promt to generate code here"
          />
          <AceEditor
            height="250px"
            width="full"
            showGutter={false}
            value={`public class Main {
              public static void main(String[] args) {
              int x = 5;
              int y = 10;
              int sum = x + y;
            System.out.println("The sum of x and y is: " + sum);
          }
}`}
          ></AceEditor>
        </div>
        <div className=" bg-zinc-800 flex flex-col">
          <div>Devs Live now</div>
          <div className="flex  flex-wrap justify-around items-around ">
            <Button
              className="aspect-square h-16 w-16"
              style={{
                borderRadius: "20px",
                marginBottom: "5px",
                fontSize: "1.5rem",
              }}
              variant="contained"
            >
              A
            </Button>
            <Button
              className="aspect-square h-16 w-16"
              style={{
                borderRadius: "20px",
                marginBottom: "5px",
                fontSize: "1.5rem",
              }}
              variant="contained"
            >
              S
            </Button>
            <Button
              className="aspect-square h-16 w-16"
              style={{
                borderRadius: "20px",
                marginBottom: "5px",
                fontSize: "1.5rem",
              }}
              variant="contained"
            >
              R
            </Button>
            <Button
              className="aspect-square h-16 w-16"
              style={{
                borderRadius: "20px",
                marginBottom: "5px",
                fontSize: "1.5rem",
              }}
              variant="contained"
            >
              R
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
