import React, { useRef, useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { datachat } from "../types/typechat";
import RowChat from "../components/chat";
import axios from "axios";
import { ChatCompletionRequestMessage } from 'openai'


type Props = {
  item: datachat;
};



function Chatbot(props: Props) {
  const apiURL = process.env.URL_APP;
  const [chatData, setChatData] = useState<datachat[]>([]);
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const chatcontent = useRef<any>(null);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)


  const getData = async () => {

    await axios.get(`${apiURL}ChatBot`)
      .then((response) => {
        console.clear()
        setChatData(response.data)
      }).then(json => console.log(json))
  }
  const postData = async (Uchat: string, Bchat: string) => {
    const cont: datachat = {
      inde: 1,
      userchat: Uchat,
      botchat: Bchat
    }
    let urlpost = `${apiURL}chatbot`;
    console.log(urlpost)
    await axios.post(urlpost,cont)
      .then((response) => {
        console.log(response.data);
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
    getData();
  }, []);
  const sendMessage = async (messages: ChatCompletionRequestMessage[]) => {
    try {
      const response = await fetch('/api/createMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      })
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }
  const handleClick = () => {
    const rep = chatcontent.current?.value?.toString() || '';
    const newc: datachat = {
      inde: 1,
      userchat: rep,
      botchat: 'Loading .............'
    }
    const newdata = [...chatData, newc]
    setChatData(newdata);
    chatcontent.current && (chatcontent.current.value = '');
    let reply = addMessage(rep);
    reply.then(result => {
      postData(rep, result.content)
    })

  }
  const handleDelete = async () => {
    let urlpost = `${apiURL}delete`;
    console.log(urlpost)
    await axios.post(urlpost)
    const trash: datachat[] = []
    setChatData(trash);
  }
  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content,
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const { data } = await sendMessage(newMessages)
      const reply = data.choices[0].message
      console.log(reply)
      // Add the assistant message to the state
      setMessages([...newMessages, reply])
      return reply;
    } catch (error) {
      // Show error when something goes wrong

    } finally {
      setIsLoadingAnswer(false)
    }
  }
 
  return (
    <div className="bg-[#242526] min-h-[90vh]">
      <div className="bg-[#242526] ">
        {chatData.map((item, index) => {
          return <RowChat item={item} key={index} />;
        })}
      </div>
      <div className=" h-[80px] bg-[#343541] w-screen ">

        <div className="flex justify-center w-screen w-1/1 fixed bottom-0 rounded-[5px] ">
          <div className="bg-[#444654]  w-1/2  flex relative justify-end items-center rounded-[5px] border-white border-[2px] ">
            <button className="flex justify-center items-center w-[30px] h-[30px] hover:bg-slate-900 rounded" onClick={handleDelete}><AiOutlineDelete className="text-[30px]" /></button>
            
            <textarea
              className="bg-[#444654] w-full border-[2px] rounded-[5px]"
              id="text" 
              ref={chatcontent}
              name="chatcontent"
              required
              rows={2}  
              style={{ resize: 'none',  minHeight: '50px',
              maxHeight: '300px', overflow: 'auto'}}
            />
            <button className="absolute flex justify-center items-center mr-5  hover:bg-slate-900 h-7 w-7 rounded hover:text-[#54ade8] " onClick={handleClick} >
              <BsFillSendFill className="hover:text-[#54ade8]"/>
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
