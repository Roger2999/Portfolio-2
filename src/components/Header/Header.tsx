import { Disclosure } from "@headlessui/react";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { ThemeStore } from "../../stores";
import { useState } from "react";
const navigation = [
  { id: "1", name: "Home", to: "/homepage", current: false },
  { id: "3", name: "Proyectos", to: "/projects", current: false },
  { id: "4", name: "Habilidades", to: "/skills", current: false },
  { id: "5", name: "Contacto", to: "/contact", current: false },
  { id: "2", name: "Sobre mi", to: "/about", current: false },
];
export const Header = () => {
  const [current, setCurrent] = useState(navigation);
  const theme = ThemeStore((state) => state.theme);

  const handleCurrent = (id: string) => {
    setCurrent(
      current.map((item) =>
        id === item.id
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };

  return (
    <>
      <div className=" header min-h-full w-full">
        <Disclosure
          as="nav"
          className={`w-full bg-gray-700 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200 text-gray-800"
          }`}
        >
          <HeaderDesktop
            current={current}
            onCurrent={handleCurrent}
            theme={theme}
            navigation={navigation}
          />
          <HeaderMobile
            current={current}
            onCurrent={handleCurrent}
            theme={theme}
            navigation={navigation}
          />
        </Disclosure>
      </div>
    </>
  );
};
