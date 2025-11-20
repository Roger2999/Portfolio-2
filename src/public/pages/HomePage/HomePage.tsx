import { CustomCard, SimpleButton } from "../../../components";

import { ThemeStore } from "../../../stores";
import "./HomePage.css";

export const HomePage = () => {
  const theme = ThemeStore((state) => state.theme);

  return (
    <>
      <div className="card-container ">
        <div className={`card border-t-4 border-blue-500 ${theme == "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
          <CustomCard
            title={"Frontend developer junior"}
            description={
              "Desarrollador frontend con especial enfoque en React y TypeScript, creando interfaces accesibles y experiencias de usuario excepcionales. Apasionado por el código limpio y el rendimiento. Este portfolio refleja mi compromiso con soluciones modernas, diseño intuitivo y estándares web de calidad."
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
