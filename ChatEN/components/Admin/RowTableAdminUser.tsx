import React from "react";
// import { formatPrice, formatDate } from '../../helper/dataHelper'
import { User } from "../../types/typeAdmin";
import { lockUser } from "@/pages/api/auth";
type Props = {
  item: User;
  handleReset: Function;
};

function RowTableAdminUser(props: Props) {
  const handClick = async () => {
    await lockUser(props.item.Personid);
    props.handleReset();
  };
  return (
    <tr className="border-b dborder-gray-600 hover:bg-gray-100 dhover:bg-gray-700">
      <td className="w-4 px-4 py-3"></td>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-[#50505f] px-2 py-0.5 rounded dbg-primary-900 dtext-primary-300 text-[15px] font-[600]">
          {props.item.Personid}
        </span>
      </td>

      <td className="px-4 py-2">
        <span className=" text-blue-700 text-sm font-medium px-2 py-0.5 rounded">
          {props.item.Username}
        </span>
      </td>
      <td className="px-4 py-2 text-[15px] text-[black] font-[500]">
        {props.item.Name}
      </td>

      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dtext-white flex  items-center ">
        {props.item.Islock === true ? (
          <div>
            <button
              onClick={handClick}
              className="bg-yellow-400 p-[5px] rounded-lg hover:bg-yellow-300 w-[100px]"
            >
              UnLock
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handClick}
              className="bg-green-400 p-[5px] rounded-lg hover:bg-green-300 w-[100px]"
            >
              Lock
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default RowTableAdminUser;
