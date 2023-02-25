import React from "react";

function Table() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-xs text-left text-gray-500">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3">
              Tijdstip
            </th>
            <th scope="col" className="py-3">
              Van
            </th>
            <th scope="col" className="py-3">
              Naar
            </th>
            <th scope="col" className="py-3">
              Duur
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map(() => (
            <tr className="bg-white odd:bg-white even:bg-slate-50 hover:bg-slate-100">
              <td
                className="px-2 py-2.5 w-1/4"
              >
                25-02-2020
              </td>
              <td className="px-2 py-2.5 w-1/4">9360*0204</td>
              <td className="px-2 py-2.5 w-1/4">211</td>
              <td className="px-2 py-2.5 w-1/4">00:00:05</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
