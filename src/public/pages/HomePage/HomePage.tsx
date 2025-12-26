import { CustomCard } from "../../../components";
import profileImage from "../../../assets/aboutme-photo.png";
import { ThemeStore } from "../../../stores";
import "./HomePage.css";

export const HomePage = () => {
  const theme = ThemeStore((state) => state.theme);

  return (
    <>
      <div className="card-container">
        <div className={`${theme=="dark"?"bg-gray-800":"bg-gray-300"}card`}>
          <CustomCard
            title={"Frontend web developer"}
            img={profileImage}
            theme={theme}
          />
        </div>
      </div>
    </>
  );
};
