import React from "react";
import Link from "next/link";
import { datachat } from "../types/typechat";

type Props = {
    item: datachat;
};
const RowChat = (props: Props) => {
    return (
        <div className="w-screen w-1/1 ">
            <div className="w-screen">
                <div className="bg-[#343541]  flex justify-center">
                    {props.item.userchat ? (
                        <div className="w-1/2 mt-[26px] text-[#D1D5DB] mb-[20px]">
                                {props.item.userchat}
                        </div>
                    ): (
                        <div>
                        </div>
                    )}
                </div>
                <div className="flex justify-center bg-[#444654]">
                    {props.item.botchat ? (
                        <div className="w-1/2 mt-[26px] text-[#D1D5DB] mb-[20px]">
                                {props.item.botchat}
                        </div>
                    ): (
                        <div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RowChat;