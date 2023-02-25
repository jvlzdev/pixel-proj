import avatarImg from "./assets/images/image-1.jpg";
import { FaRegBell, FaUserCheck } from "react-icons/fa";
import { TfiExport } from "react-icons/tfi";

import { BiEnvelope } from "react-icons/bi";

import UserTable from "./components/UserTable";
import EmployeeTable from "./components/EmployeeTable";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import TaskTable from "./components/TaskTable";
const App = () => {
  return (
    <>
      <div className="flex w-full bg-gray-50 font-poppins h-screen h-full">
        <aside
          className="flex-none w-60 transition-transform sm:translate-x-0 bg-white"
          aria-label="Sidebar"
        >
          <div className="h-full px-8 py-4 overflow-y-auto">
            <div className="space-y-2 flex items-center p-2 text-lg font-normal text-gray-500">
              <h1>Logo</h1>
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg hover:text-white hover:bg-indigo-500"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-5">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg hover:text-white hover:bg-indigo-500"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-5">Dossiers</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg hover:text-white hover:bg-indigo-500"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-5">Relaties</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg hover:text-white hover:bg-indigo-500"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-5">Taken</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-1 h-full text-gray-800">
          <div className="grid grid-cols-3 p-4 items-center bg-white">
            <div>
              <p className="text-[1.5rem] font-bold">Dashboard</p>
            </div>
            <div>
              <form className="flex items-center">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-indigo-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                    placeholder="Search here..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex w-full justify-end items-center">
              <div className="relative w-10 mx-2">
                <button className="bg-[#ecfeff] rounded-lg w-10 h-10 items-center justify-center flex">
                  <BiEnvelope className="text-[#0088fe]" />
                </button>
                <span className="top-1 left-6 absolute  w-2.5 h-2.5 bg-[#f97316] border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
              <div className="relative w-10 mx-2">
                <button className="bg-[#fefce8] rounded-lg w-10 h-10 items-center justify-center flex">
                  <FaRegBell className="text-[#fbbf24]" />
                </button>
                <span className="top-1 left-6 absolute  w-2.5 h-2.5 bg-[#f97316] border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="hover:bg-indigo-500 hover:text-white font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                <img
                  className="w-10 h-10 rounded-xl"
                  src={avatarImg}
                  alt="Default avatar"
                ></img>
                <div className="flex flex-col mx-5 text-left">
                  <div className="font-bold">Musliq</div>
                  <div className="font-normal text-xs">Admin</div>
                </div>
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="m-4">
            <div className="grid grid-cols-3 gap-4 mb-4 h-1/3">
              <div className="h-64 bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Hi Musliq</h3>
                    <p className="font-normal text-sm">How are you today?.</p>
                  </div>
                  <div className="cursor-pointer h-8	flex flex-row rounded-md bg-white border px-2 border-gray-300 justify-center items-center">
                    <TfiExport className="w-2.5 h-2.5" />
                    <p className="ml-3 font-semibold text-xs">Export</p>
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full h-1/2">
                  <div className="w-1/4 bg-red-100 p-3 rounded-lg">
                    <div className="text-white bg-red-400 p-2 rounded-full w-fit justify-center items-center mb-2">
                      <FaUserCheck className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Title</p>
                      <p className="font-normal text-xs">Subtitle</p>
                    </div>
                  </div>
                  <div className="w-1/4 bg-amber-100 p-3 rounded-lg">
                    <div className="text-white bg-amber-400 p-2 rounded-full w-fit justify-center items-center mb-2">
                      <FaUserCheck className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Title</p>
                      <p className="font-normal text-xs">Subtitle</p>
                    </div>
                  </div>
                  <div className="w-1/4 bg-lime-100 p-3 rounded-lg">
                    <div className="text-white bg-lime-400 p-2 rounded-full w-fit justify-center items-center mb-2">
                      <FaUserCheck className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Title</p>
                      <p className="font-normal text-xs">Subtitle</p>
                    </div>
                  </div>
                  <div className="w-1/4 bg-indigo-100 p-3 rounded-lg">
                    <div className="text-white bg-indigo-400 p-2 rounded-full w-fit justify-center items-center mb-2">
                      <FaUserCheck className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Title</p>
                      <p className="font-normal text-xs">Subtitle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Visitors</h3>
                    {/* <p className="font-normal text-xs">sub description</p> */}
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full h-full">
                  <PieChart />
                </div>
              </div>
              <div className="h-64 bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Sales Activities</h3>
                    {/* <p className="font-normal text-xs">sub description</p> */}
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full h-1/2">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4 h-1/3">
              <div className="h-64 bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Recent Emails</h3>
                    {/* <p className="font-normal text-xs">sub description</p> */}
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full h-full items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      width="184"
                      height="152"
                      viewBox="0 0 184 152"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g transform="translate(24 31.67)">
                          <ellipse
                            fill-opacity=".8"
                            fill="#F5F5F7"
                            cx="67.797"
                            cy="106.89"
                            rx="67.797"
                            ry="12.668"
                          ></ellipse>
                          <path
                            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                            fill="#AEB8C2"
                          ></path>
                          <path
                            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                            fill="url(#linearGradient-1)"
                            transform="translate(13.56)"
                          ></path>
                          <path
                            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                            fill="#F5F5F7"
                          ></path>
                          <path
                            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                            fill="#DCE0E6"
                          ></path>
                        </g>
                        <path
                          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                          fill="#DCE0E6"
                        ></path>
                        <g transform="translate(149.65 15.383)" fill="#FFF">
                          <ellipse
                            cx="20.654"
                            cy="3.167"
                            rx="2.849"
                            ry="2.815"
                          ></ellipse>
                          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
                        </g>
                      </g>
                    </svg>
                    <div className="text-xs">No email found.</div>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Messages</h3>
                    {/* <p className="font-normal text-xs">sub description</p> */}
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full h-full items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      width="184"
                      height="152"
                      viewBox="0 0 184 152"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g transform="translate(24 31.67)">
                          <ellipse
                            fill-opacity=".8"
                            fill="#F5F5F7"
                            cx="67.797"
                            cy="106.89"
                            rx="67.797"
                            ry="12.668"
                          ></ellipse>
                          <path
                            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                            fill="#AEB8C2"
                          ></path>
                          <path
                            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                            fill="url(#linearGradient-1)"
                            transform="translate(13.56)"
                          ></path>
                          <path
                            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                            fill="#F5F5F7"
                          ></path>
                          <path
                            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                            fill="#DCE0E6"
                          ></path>
                        </g>
                        <path
                          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                          fill="#DCE0E6"
                        ></path>
                        <g transform="translate(149.65 15.383)" fill="#FFF">
                          <ellipse
                            cx="20.654"
                            cy="3.167"
                            rx="2.849"
                            ry="2.815"
                          ></ellipse>
                          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
                        </g>
                      </g>
                    </svg>
                    <div className="text-xs">No messages found.</div>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Employees</h3>
                    {/* <p className="font-normal text-xs">sub description</p> */}
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-52 pl-2.5 p-1.5"
                    placeholder="Search Employees..."
                    required
                  />
                </div>
                <div className="flex flex-row gap-5 w-full overflow-y-auto">
                  <EmployeeTable />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4 h-1/3">
              <div className="h-[19rem] col-span-2 bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Task/s</h3>
                    {/* <p className="font-normal text-xs">sub description</p> */}
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full h-full overflow-y-auto">
                  <TaskTable />
                </div>
              </div>
              <div className="h-[19rem] bg-white rounded shadow-sm flex flex-col w-full p-4 justify-between">
                <div className="flex w-full justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Phone Calls</h3>
                    {/* <p className="font-normal text-xs">sub description</p> */}
                  </div>
                  <div className="cursor-pointer h-8	flex flex-row rounded-md bg-white border px-2 border-gray-300 justify-center items-center">
                    <TfiExport className="w-2.5 h-2.5" />
                    <p className="ml-3 font-semibold text-xs">Export</p>
                  </div>
                </div>
                <UserTable />
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border border-dashed flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="border border-dashed flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
            </div>
            <div className="border border-dashed flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
