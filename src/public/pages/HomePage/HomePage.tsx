import { CustomCard, SimpleButton } from "../../../components";
import { ThemeStore } from "../../../stores";
import "./HomePage.css";
export const HomePage = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <div className="card-container ">
        <div className={`card ${theme == "dark" ? "bg-gray-700" : ""}`}>
          <CustomCard
            title={"Frontend developer junior"}
            description={
              "Creación de aplicaciones modernas con rendimiento óptimo y diseño intuitivo Comprometido con estándares web y soluciones innovadoras"
            }
            skills={
              <>
                <SimpleButton>HTML5</SimpleButton>
                <SimpleButton>CSS3</SimpleButton>
                <SimpleButton>JavaScript</SimpleButton>
                <SimpleButton>React</SimpleButton>.
              </>
            }
            img="https://images.icon-icons.com/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
            theme={theme}
          />
        </div>
      </div>
    </>
  );
};
