import { DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import type { HeaderProps } from "../types";
import { AuthStore, ThemeStore } from "../../../stores";
import { SimpleButton } from "../../SimpleButton/SimpleButton";
import "./HeaderDesktop.css";
export const HeaderDesktop = ({ theme, onCurrent, current }: HeaderProps) => {
  const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  const logout = AuthStore((state) => state.logout);
  const toggleTheme = ThemeStore((state) => state.toggleTheme);
  return (
    <>
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="nav-mobile flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="shrink-0">
              <img
                alt="Portfolio"
                src="https://www.svgrepo.com/show/247452/portfolio-suitcase.svg"
                className="size-8"
              />
            </div>
            <div className="nav-btns-container md:block">
              <div className="flex items-center gap-5">
                {current.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => onCurrent && onCurrent(item.id)}
                    aria-current={item.current ? "page" : undefined}
                    className={`rounded-md px-2 py-2 text-base font-semibold ${
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
                  </NavLink>
                ))}
                {/* "rounded-md px-3 py-2 text-sm font-medium"*/}
              </div>
            </div>
          </div>
          <div className="rigth-box flex items-center  justify-end h-full w-64">
          <div className="login-container flex justify-center items-center">
            <NavLink to="./register">
              <SimpleButton className="btn btn-outline btn-success">
                Registrarse
              </SimpleButton>
            </NavLink>
            {isAuthenticated ? (
              <SimpleButton
                onClick={logout}
                className="btn btn-outline btn-success mx-0"
              >
                Logout
              </SimpleButton>
            ) : (
              <NavLink to="./login">
                <SimpleButton className="btn btn-outline btn-success mx-0">
                  Login
                </SimpleButton>
              </NavLink>
            )}
          </div>
            <SimpleButton
            className={`thema-btn rounded-full p-2 ${
              theme == "light" ? "bg-yellow-100" : "bg-gray-500"
            }`}
            onClick={toggleTheme}
          >
            {theme == "light" ? "🌞" : "🌙"}
          </SimpleButton>
          <div className="btn-mobile -mr-2 flex">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="false"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          </div>
          
          
        </div>
      </div>
    </>
  );
};
