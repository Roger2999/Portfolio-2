import { DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import type { HeaderProps } from "../types";
import { AuthStore } from "../../../stores";
import "./HeaderDesktop.css";
import { SimpleButton } from "../../SimpleButton/SimpleButton";
export const HeaderDesktop = ({ theme, onCurrent, current }: HeaderProps) => {
  const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  const logout = AuthStore((state) => state.logout);
  return (
    <>
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                alt="Portfolio"
                src="https://www.svgrepo.com/show/247452/portfolio-suitcase.svg"
                className="size-8"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {current.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => onCurrent && onCurrent(item.id)}
                    aria-current={item.current ? "page" : undefined}
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
                  </NavLink>
                ))}
                {/* "rounded-md px-3 py-2 text-sm font-medium"*/}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="auth-container ml-4 flex items-center md:ml-10">
              <NavLink to="./register">
                <SimpleButton className="btn btn-outline btn-success">
                  Registrarse
                </SimpleButton>
              </NavLink>
              {isAuthenticated ? (
                <SimpleButton
                  onClick={logout}
                  className="btn btn-outline btn-success"
                >
                  Logout
                </SimpleButton>
              ) : (
                <NavLink to="./login">
                  <SimpleButton className="btn btn-outline btn-success">
                    Login
                  </SimpleButton>
                </NavLink>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
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
    </>
  );
};
