import data from "@/data/data";
const FrontSection = () => {
  console.log("data", (data.THEME.toLocaleLowerCase() == "black" ||
  data.THEME.toLocaleLowerCase() == "white")
  ? `${data.THEME}-theme`
  : "black-theme");
  return (
    <>
      <div id="frontpage-main">
        <div
          className={
            data.THEME &&
            (data.THEME.toLocaleLowerCase() == "black" ||
              data.THEME.toLocaleLowerCase() == "white")
              ? `${data.THEME}-theme`
              : "black-theme"
          }
        >
          Shahmeer
        </div>
      </div>
    </>
  );
};
export default FrontSection;
