import DicChat from "@/components/dicchat";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { chatHistory, dataTraCau, transcriptss } from "@/types/typeSystem";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "marked-react";
import policy from "../../public/policy";
function Chatbot() {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<chatHistory[]>([]);

  const API_KEY = "AIzaSyDpS0k-_7a1Gfij07ZUFlS3mOkEdd7UBMQ";
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  useEffect(() => {
    const initialHistory: chatHistory[] = [
      {
        role: "user",
        parts: `Bạn sẽ trong vai 1 chatbot để trả lời câu hỏi của hệ thống học tập và mua bán sách CHATEN, hãy đề xuất sách mà người dùng đang tìm kiếm, đưa họ đường dẫn với URL là 'http://localhost:3000/course/{ID của quyển sáchh}'(nhớ là http thôi): ${policy}`,
      },
      {
        role: "model",
        parts: "Xin chào, tôi là Chatbot của hệ thống CHATEN. Tôi có thể trả lời hoặc tư vấn sách có trong hệ thống bán hàng, bạn cần hỏi gì ?",
      },
    ];
    setChatHistory(initialHistory);
  }, []); // Run only once on component mount

  const generateMessage = async (chat: any, message: string) => {
    try {
      setIsLoading(true);
      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();
      const temp: chatHistory = {
        role: "model",
        parts: text,
      };
      setIsLoading(false);
      setChatHistory((prevHistory) => [...prevHistory, temp]);
    } catch {
      console.log("error");
    }
  };

  const hanleClickSend = async () => {
    if (input.trim() !== "") {
      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });
      const temp: chatHistory = {
        role: "user",
        parts: input,
      };
      setChatHistory((prevHistory) => [...prevHistory, temp]);
      await generateMessage(chat, input);
      setInput("");
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      hanleClickSend();
    }
  };
  return (
    <div className="mybody">
      <div className="--darktheme" id="chat">
        <div className="chat__conversation-board">
          {chatHistory.map((message, index) => (
            <>
              {message.role == "user" && message.parts.length < 1000 && (
                <>
                  <div
                    className="chat__conversation-board__message-container reversed"
                    key={index + "chat"}
                  >
                    <div className="chat__conversation-board__message__person">
                      <div className="chat__conversation-board__message__person__avatar">
                        <img
                          src="https://randomuser.me/api/portraits/men/9.jpg"
                          alt="Dennis Mikle"
                        />
                      </div>
                      <span className="chat__conversation-board__message__person__nickname">
                        Dennis Mikle
                      </span>
                    </div>
                    <div className="chat__conversation-board__message__context">
                      <div className="chat__conversation-board__message__bubble">
                        {" "}
                        <span>{message.parts}</span>
                      </div>
                    </div>
                    <div className="chat__conversation-board__message__options"></div>
                  </div>
                </>
              )}

              {message.role == "model" && (
                <>
                  <div
                    className="chat__conversation-board__message-container"
                    key={index + "Model"}
                  >
                    <div className="chat__conversation-board__message__person">
                      <div className="chat__conversation-board__message__person__avatar">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="Monika Figi"
                        />
                      </div>
                      <span className="chat__conversation-board__message__person__nickname">
                        Chatbot
                      </span>
                    </div>
                    <div className="chat__conversation-board__message__context">
                      <div className="chat__conversation-board__message__bubble">
                        {" "}
                        <span>
                          <Markdown>{message.parts}</Markdown>
                        </span>
                      </div>
                      <div className="chat__conversation-board__message__bubble">
                        {" "}
                      </div>
                    </div>
                    <div className="chat__conversation-board__message__options"></div>
                  </div>
                </>
              )}
            </>
          ))}
          {isLoading == true && (
            <>
              <div className="chat__conversation-board__message-container">
                <div className="chat__conversation-board__message__person">
                  <div className="chat__conversation-board__message__person__avatar">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Monika Figi"
                    />
                  </div>
                  <span className="chat__conversation-board__message__person__nickname">
                    Chatbot
                  </span>
                </div>
                <div className="chat__conversation-board__message__context">
                  <div className="chat__conversation-board__message__bubble">
                    {" "}
                    <span>
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </span>
                  </div>
                  <div className="chat__conversation-board__message__bubble">
                    {" "}
                  </div>
                </div>
                <div className="chat__conversation-board__message__options"></div>
              </div>
            </>
          )}
        </div>

        <div className="chat__conversation-panel">
          <div className="chat__conversation-panel__container">
            <input
              className="chat__conversation-panel__input panel-item "
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              title="submit"
              className="chat__conversation-panel__button panel-item btn-icon send-message-button "
              onClick={hanleClickSend}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                data-reactid="1036"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .--darktheme {
            --chat-background: rgba(10, 14, 14, 0.9);
            --chat-panel-background: #3d3d5c;
            --chat-bubble-background: #3d3d5c;
            --chat-bubble-active-background: #171a1b;
            --chat-add-button-background: #212324;
            --chat-send-button-background: #8147fc;
            --chat-text-color: #a3a3a3;
            --chat-options-svg: #a3a3a3;
          }

          .mybody {
            background: url(https://img.freepik.com/free-vector/flat-design-english-school-background_23-2149487419.jpg?w=1050&t=st=1683379957~exp=1683380557~hmac=a41fb0341d876705a2194cac6a73b9c280d05ee42241acb8226e66616ca8cfe9);
            background-size: cover;
            height: 90vh;
          }

          #chat {
            background: var(--chat-background);
            max-width: 100vw;
            margin: auto;
            max-height: 90vh;
            height: 90vh;
            box-sizing: border-box;
            padding: 3em;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
          }
          #chat::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(https://img.freepik.com/free-vector/flat-design-english-school-background_23-2149487419.jpg?w=1050&t=st=1683379957~exp=1683380557~hmac=a41fb0341d876705a2194cac6a73b9c280d05ee42241acb8226e66616ca8cfe9)
              fixed;
            z-index: -1;
          }
          #chat .btn-icon {
            position: relative;
            cursor: pointer;
          }
          #chat .btn-icon svg {
            stroke: #fff;
            fill: #fff;
            width: 60%;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          #chat .chat__conversation-board {
            padding: 1em 0 2em;
            height: calc(90vh - 55px - 2em - 25px * 2 - 0.5em - 3em);
            overflow: auto;
          }
          #chat .chat__conversation-board__message-container.reversed {
            flex-direction: row-reverse;
          }
          #chat
            .chat__conversation-board__message-container.reversed
            .chat__conversation-board__message__bubble {
            position: relative;
          }
          #chat
            .chat__conversation-board__message-container.reversed
            .chat__conversation-board__message__bubble
            span:not(:last-child) {
            margin: 0 0 2em 0;
          }
          #chat
            .chat__conversation-board__message-container.reversed
            .chat__conversation-board__message__person {
            margin: 0 0 0 1.2em;
          }
          #chat
            .chat__conversation-board__message-container.reversed
            .chat__conversation-board__message__options {
            align-self: center;
            position: absolute;
            left: 0;
            display: none;
          }
          #chat .chat__conversation-board__message-container {
            position: relative;
            display: flex;
            flex-direction: row;
          }

          #chat
            .chat__conversation-board__message-container:hover
            .option-item:not(:last-child) {
            margin: 0 0.5em 0 0;
          }
          #chat .chat__conversation-board__message-container:not(:last-child) {
            margin: 0 0 2em 0;
          }
          #chat .chat__conversation-board__message__person {
            text-align: center;
            margin: 0 1.2em 0 0;
          }
          #chat .chat__conversation-board__message__person__avatar {
            background: white;
            height: 50px;
            width: 50px;
            overflow: hidden;
            border-radius: 50%;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            ms-user-select: none;
            position: relative;
          }
          #chat .chat__conversation-board__message__person__avatar::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
          }
          #chat .chat__conversation-board__message__person__avatar img {
            height: 100%;
            width: auto;
          }
          #chat .chat__conversation-board__message__person__nickname {
            font-size: 18px;
            color: #484848;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: none;
          }
          #chat .chat__conversation-board__message__context {
            max-width: 55%;
            align-self: flex-end;
          }
          #chat .chat__conversation-board__message__options {
            align-self: center;
            position: absolute;
            right: 0;
            display: none;
          }
          #chat .chat__conversation-board__message__options .option-item {
            border: 0;
            background: 0;
            padding: 0;
            margin: 0;
            height: 16px;
            width: 16px;
            outline: none;
          }
          #chat .chat__conversation-board__message__options .emoji-button svg {
            stroke: var(--chat-options-svg);
            fill: transparent;
            width: 100%;
          }
          #chat .chat__conversation-board__message__options .more-button svg {
            stroke: var(--chat-options-svg);
            fill: transparent;
            width: 100%;
          }
          #chat .chat__conversation-board__message__bubble span {
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            display: inline-table;
            word-wrap: break-word;
            background: var(--chat-bubble-background);
            font-size: 18px;
            color: var(--chat-text-color);
            padding: 0.5em 0.8em;
            line-height: 1.5;
            border-radius: 6px;
            font-family: "Lato", sans-serif;
          }
          #chat .chat__conversation-board__message__bubble:not(:last-child) {
            margin: 0 0 0.3em;
          }
          #chat .chat__conversation-board__message__bubble:active {
            background: var(--chat-bubble-active-background);
          }
          #chat .chat__conversation-panel {
            background: var(--chat-panel-background);
            border-radius: 12px;
            padding: 0 1em;
            height: 60px;
            margin: 0.5em 0 0;
          }
          #chat .chat__conversation-panel__container {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
          }
          #chat
            .chat__conversation-panel__container
            .panel-item:not(:last-child) {
            margin: 0 1em 0 0;
          }
          #chat .chat__conversation-panel__button {
            background: grey;
            height: 20px;
            width: 30px;
            border: 0;
            padding: 0;
            outline: none;
            cursor: pointer;
          }
          #chat .chat__conversation-panel .add-file-button {
            height: 23px;
            min-width: 23px;
            width: 23px;
            background: var(--chat-add-button-background);
            border-radius: 50%;
          }
          #chat .chat__conversation-panel .add-file-button svg {
            width: 70%;
            stroke: #54575c;
          }
          #chat .chat__conversation-panel .emoji-button {
            min-width: 23px;
            width: 23px;
            height: 23px;
            background: transparent;
            border-radius: 50%;
          }
          #chat .chat__conversation-panel .emoji-button svg {
            width: 100%;
            fill: transparent;
            stroke: #54575c;
          }
          #chat .chat__conversation-panel .send-message-button {
            background: var(--chat-send-button-background);
            height: 40px;
            min-width: 40px;
            border-radius: 50%;
          }

          #chat .chat__conversation-panel .send-message-button:active {
            transform: scale(0.9);
          }
          #chat .chat__conversation-panel .send-message-button svg {
            margin: 1px -2px;
          }
          #chat .chat__conversation-panel__input {
            width: 100%;
            height: 100%;
            outline: none;
            position: relative;
            color: var(--chat-text-color);
            font-size: 18px;
            background: transparent;
            border: 0;
            font-family: "Lato", sans-serif;
            resize: none;
          }

          @media only screen and (max-width: 600px) {
            #chat {
              margin: 0;
              border-radius: 0;
            }
            #chat .chat__conversation-board {
              height: calc(90vh - 55px - 2em - 0.5em - 3em);
            }
            #chat .chat__conversation-board__message__options {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Chatbot;
