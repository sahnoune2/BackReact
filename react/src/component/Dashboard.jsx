import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = (children) => {
  return (
    <div className="min-h-screen" style={{ display: "flex" }}>
      <div className="w-[20%]  flex flex-col">
        <>
          <aside
            id="default-sidebar"
            className=" left-0 z-40  h-full transition-transform -translate-x-full sm:translate-x-0         rounded-lg border shadow-md  dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
          >
            <div
              style={{
                backgroundColor: "rgb(29 78 216 / var(--tw-text-opacity, 1))",
              }}
              className="h-full px-3 py-4 overflow-y-auto  dark:bg-white       rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-[rgb(29_78_216_/var(--tw-text-opacity,1))] dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3 group-hover:text-[rgb(29_78_216_/var(--tw-text-opacity,1))]">
                      Dashboard
                    </span>
                  </a>
                </li>

                <li>
                  <Link
                    to={"/admin/users"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="shrink-0 w-5 h-5 text-white     transition duration-75 dark:text-gray-400 group-hover:text-[rgb(29_78_216_/var(--tw-text-opacity,1))] dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-[rgb(29_78_216_/var(--tw-text-opacity,1))]">
                      Users
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-[rgb(29_78_216_/var(--tw-text-opacity,1))] dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-[rgb(29_78_216_/var(--tw-text-opacity,1))]">
                      Products
                    </span>
                  </Link>
                </li>
           
             
              </ul>
            </div>
          </aside>
        </>

        {/* <Link to={"/admin"}> products </Link>
        <Link    to={"/admin/users"}> users</Link> */}
      </div>
      <div className="w-[80%]  h-full">
        <Outlet> {children} </Outlet>
      </div>
    </div>
  );
};
