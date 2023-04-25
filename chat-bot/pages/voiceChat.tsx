import React, { useRef, useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { datachat } from "../types/typechat";
import RowChat from "../components/chat";
import axios from "axios";
import { ChatCompletionRequestMessage } from 'openai'
import MicrophoneButton from "@/components/voice";




function VoiceChat() {
  
  const [chatData, setChatData] = useState<datachat[]>([]);
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const chatcontent = useRef<HTMLInputElement>(null);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);



  useEffect(() => {
    getData();
    let recognition = new window.webkitSpeechRecognition();
    if (isListening) {
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;

          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }
      
        setTranscript(prevTranscript => prevTranscript + finalTranscript)

      };

      recognition.start();
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isListening]);


  const handleStart = () => {
    setIsListening(true);
  };

  const handleStop = () => {
    const newc: datachat = {
      inde: 1,
      userchat: transcript,
      botchat: 'Loading .............'
    }
    const newdata = [...chatData, newc]
    setChatData(newdata);
    setIsListening(false);
    handleClick();
  };




  const getData = async () => {
    await axios.get("http://127.0.0.1:5048/TestController")
      .then((response) => {
        console.clear()
        setChatData(response.data)
        console.log(response.data);
      }).then(json => console.log(json))
  }
  const postData = async (Uchat: string, Bchat: string) => {

    let urlpost = "http://localhost:5048/chatbot?userchat=N" + "'" + Uchat + "'" + "&" + "botchat=N" + "'" + Bchat + "'";
    console.log(urlpost)
    await axios.post(urlpost)
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
    const rep = transcript || '';
    let reply = addMessage(rep);
    reply.then(result => {
      postData(rep, result.content)
      textToSpeech(result.content);
    })

  }
  const handleDelete = async () => {
    let urlpost = "http://localhost:5048/delete";
    console.log(urlpost)
    await axios.post(urlpost)
    const trash: datachat[] = []
    setChatData(trash);
  }
  const addMessage = async (content: string) => {

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

    }
  }
  const textToSpeech = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const voice = voices.find((voice) => voice.lang === "en-US");
    utterance.voice = voice || null;
    synth.speak(utterance);
  };
  return (
    <div className="h-screen bg-[#444654] ">
      <div>
      </div>
      <div className="bg-[#444654] ">
        {chatData.map((item, index) => {
          return <RowChat item={item} key={index} />;
        })}
      </div>
      <div className=" h-[80px] bg-[#343541] w-screen ">

        <div className="flex justify-center w-screen w-1/1 fixed bottom-0">
          <div className="bg-[#444654]  w-1/2  flex relative justify-end items-center">
            <button className="flex justify-center items-center w-[30px] h-[30px] hover:bg-slate-900 rounded" onClick={handleDelete}><AiOutlineDelete className="text-[30px]" /></button>
            <input
              className="bg-[#444654] w-full border-[2px] rounded-[5px]"
              ref={chatcontent}
              type="text"
              name="chatcontent"
              id="chatcontent"
              value={transcript}
              readOnly
            />
           
              <button onMouseDown={handleStart} onMouseUp={handleStop}>Start</button>
             <button className="flex justify-center items-center w-[30px] h-[30px] hover:bg-slate-900 rounded" onClick={()=>setTranscript('')}><AiOutlineDelete className="text-[30px]" /></button>
             <MicrophoneButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceChat;
