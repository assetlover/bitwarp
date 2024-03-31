const appbarcss =
  "min-w-full bg-zinc-900 min-h-fit flex flex-row justify-between items-center border-b";
const appnameheadingcss = "text-3xl font-bold text-green-600 p-5";
const usericoncss =
  "ml-5 mr-3 bg-zinc-800 rounded-full h-10 w-10 text-center flex items-center justify-center border-2 border-green-200 shadow-[0px_0px_3px_2px_#00ff00]";
const userprofilecss = "flex flex-row min-w-fit h-full items-center";
const userprofiletextcss = "p-2 text-xl text-green-500 font-semibold";
export default function DashboardAppbar(props) {
  const firstLetter = props.username.toUpperCase().charAt(0);
  return (
    <div className={appbarcss}>
      <div>
        {" "}
        <h1 className={appnameheadingcss}>Bit Warp</h1>
      </div>
      <div className={userprofilecss}>
        <p className={userprofiletextcss}>{props.username}</p>
        <div className={usericoncss}>
          <p className="text-3xl text-green-500">{firstLetter}</p>
        </div>
      </div>
    </div>
  );
}
