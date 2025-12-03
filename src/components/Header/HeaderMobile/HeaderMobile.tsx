import {
  DisclosurePanel,
  DisclosureButton,
  Transition,
} from "@headlessui/react";
import { NavLink } from "react-router-dom";
import type { HeaderProps } from "../types";
import { SimpleButton } from "../../SimpleButton/SimpleButton";
import { AuthStore } from "../../../stores";

export const HeaderMobile = ({ onCurrent, current, theme }: HeaderProps) => {
  const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  const logout = AuthStore((state) => state.logout);

  return (
    <>
      {
        // Mobile menu transition, envolver in Transition component for animation
      }
      <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-200 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="transform opacity-200 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <DisclosurePanel
          className={`${
            theme === "dark" ? "menu-mobile-ligth" : "menu-mobile-dark"
          }`}
        >
          <div className="menu-1 space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {current.map((item) => (
              <DisclosureButton
                key={item.name}
                as={NavLink}
                to={item.to}
                onClick={() => onCurrent && onCurrent(item.id)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  item.current && theme == "dark"
                    ? "bg-gray-900 text-white"
                    : item.current &&
                      theme == "light" &&
                      "bg-gray-400 text-gray-900"
                } ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-white/20 hover:text-white"
                    : "text-gray-900 hover:bg-gray-300 hover:text-gray-900"
                }`}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="menu-2 border-t border-white/10 pt-4 pb-3">
            {isAuthenticated ? (
              <SimpleButton
                onClick={logout}
                className="btn btn-outline btn-success ml-5"
              >
                Logout
              </SimpleButton>
            ) : (
              <NavLink to="./login">
                <SimpleButton className="btn btn-outline btn-success ml-5">
                  Login
                </SimpleButton>
              </NavLink>
            )}
            <NavLink to="./register">
              <SimpleButton className="btn btn-outline btn-success">
                Registrarse
              </SimpleButton>
            </NavLink>
            {isAuthenticated && (
              <>
                <div className="manage-nav flex gap-5 m-5">
                  <NavLink
                    className={"btn btn-warning"}
                    to="/private/manageProjects"
                  >
                    GP
                  </NavLink>
                  <NavLink
                    className={"btn btn-warning"}
                    to="/private/manageSkills"
                  >
                    GH
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </DisclosurePanel>
      </Transition>
    </>
  );
};
