import React, { useRef, useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { datachat, datat, dicchat, sentences } from "../types/typechat";
import RowChat from "../components/chat";
import axios from "axios";



type Props = {
  item: datachat;
};

const apiURL = process.env.URL_APP;

function Dictionary(props: Props) {

  const [chatData, setChatData] = useState<datachat[]>([]);
  const [messages, setMessages] = useState<string>('')
  const chatcontent = useRef<HTMLInputElement>(null);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)
  const [dataDic, setDataDic] = useState<sentences[]>([])



  const getData = async () => {
    await axios.get(`${apiURL}/TestController`)
      .then((response) => {
        console.clear()
        setChatData(response.data)
      }).then(json => console.log(json))
  }
  const postData = async (Uchat: string, Bchat: string) => {

    let urlpost = "http://localhost:5048/chatbot?userchat=N" + "'" + Uchat + "'" + "&" + "botchat=N" + "'" + Bchat + "'";
    console.log(urlpost)
    await axios.post(urlpost)
      .then((response) => {

        const newc: datachat = {
          inde: 1,
          userchat: Uchat,
          botchat: Bchat
        }
        const newdata = [...chatData, newc]
        setChatData(newdata);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });

  }
  useEffect(() => {
    // getData();
  }, []);

  const sendMessage = async (messages: string) => {
    try {
      const response = await fetch('/api/getDictionary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/string',
        },
        body:  messages ,
      })

      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }
  const handleClick = async () => {
    
    const rep = chatcontent.current?.value?.toString() || '';
    let reply : datat = await sendMessage(rep);
  }
  const handleDelete = async () => {
    let urlpost = "http://localhost:5048/delete";
    console.log(urlpost)
    await axios.post(urlpost)
    const trash: datachat[] = []
    setChatData(trash);
  }
  return (
    <div className="h-screen bg-[#444654] ">
      <div>
      </div>
      <div className="bg-[#444654] ">
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
                          
                        </div>
                    ): (
                        <div className="w-1/2 mt-[26px] text-[#D1D5DB] mb-[20px]">
                          None
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
      <div className=" h-[80px] bg-[#343541] w-screen ">

        <div className="flex justify-center w-screen w-1/1 fixed bottom-0 rounded-[5px]">
          <div className="bg-[#444654]  w-1/2  flex relative justify-end items-center rounded-[5px]">
            <button className="flex justify-center items-center w-[30px] h-[30px] hover:bg-slate-900 rounded" onClick={handleDelete}><AiOutlineDelete className="text-[30px]" /></button>
            <input
              className="bg-[#444654] w-full border-[2px] rounded-[5px]"
              ref={chatcontent}
              type="text"
              name="chatcontent"
              id="chatcontent"
              required
            />
            <button className="absolute flex justify-center items-center mr-5 hover:text-white hover:bg-slate-900 h-7 w-7 rounded " onClick={handleClick} >
              <BsFillSendFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
