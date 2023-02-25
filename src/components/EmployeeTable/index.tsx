import React from "react";
import avatarImg from "../../assets/images/image-1.jpg";

function EmployeeTable() {
  return (
    <div className="w-full">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-3 py-2">
              Name
            </th>
            <th scope="col" className="px-3 py-2">
              Position
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
            <tr className="bg-white border-b hover:bg-slate-100">
              <td
                scope="row"
                className="flex items-center px-3 py-2 text-gray-900"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={avatarImg}
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-xs font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500 text-xs">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </td>
              <td className="px-3 py-2 text-xs">Teacher</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
