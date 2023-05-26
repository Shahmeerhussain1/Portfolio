import data from "./data/data";

const FrontSection = () => {
  console.log("data", data);
  return (
    <>
      <div
        id="frontpage-main"
        className={
          data.THEME &&
          (data.THEME.toLocaleLowerCase() == "black" ||
            data.THEME.toLocaleLowerCase() == "white")
            ? `${data.THEME}-theme`
            : "black-theme"
        }
      >

        
      </div>
    </>
  );
};
export default FrontSection;
