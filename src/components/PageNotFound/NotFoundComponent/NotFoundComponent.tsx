import { ThemeStore } from "../../../stores";
import { ButtonNav } from "../../ButtonNav/ButtonNav";

export const NotFoundComponent = () => {
  const theme = ThemeStore((state) => state.theme);
  return (
    <>
      <main
        className={`grid min-h-full place-items-center rounded-2xl ${
          theme === "dark"
            ? "bg-gray-700 text-gray-100"
            : "bg-white text-gray-900"
        }  px-6 py-24 sm:py-32 lg:px-8`}
      >
        <div className="text-center">
          <p
            className={`text-base font-semibold ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-600"
            } `}
          >
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonNav
              type="button"
              label=" Go back home"
              to="/homepage"
              className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            />
          </div>
        </div>
      </main>
    </>
  );
};
