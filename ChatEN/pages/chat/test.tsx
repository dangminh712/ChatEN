// components/ChatWithHistoryPage.tsx

import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

  import { chatHistory } from "@/types/typeSystem";
const ChatWithHistoryPage = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<chatHistory[]>([]);

  const API_KEY = "AIzaSyDpS0k-_7a1Gfij07ZUFlS3mOkEdd7UBMQ";
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const formatPolicyText = (policyText: string) => {
    const formattedPolicy = policyText
      .split("\n")
      .map((line, index) => <p key={index}>{line}</p>);

    return formattedPolicy;
  };
  const policy = `Chương trình 01: Bảo hiểm y tế cơ bản

Giá cả:
Người tham gia thuộc hộ gia đình: 804.600 đồng/năm.
Người tham gia thuộc nhóm do người sử dụng lao động đóng: 4,5% mức lương cơ sở.
Người tham gia thuộc nhóm do ngân sách nhà nước đóng: miễn phí.
Chi tiết:
Mức hưởng: 80% chi phí khám chữa bệnh.
Phạm vi hưởng: toàn quốc.
Thời gian hưởng: 12 tháng/năm.
Đối tượng tham gia:
Người đang sinh sống, làm việc, học tập tại Việt Nam.
Người nước ngoài đang cư trú, học tập, làm việc tại Việt Nam.
Chương trình 02: Bảo hiểm y tế tự nguyện

Giá cả:
Người tham gia thuộc hộ gia đình: 804.600 đồng/năm.
Người tham gia thuộc nhóm do người sử dụng lao động đóng: 4,5% mức lương cơ sở.
Người tham gia thuộc nhóm do ngân sách nhà nước đóng: miễn phí.
Chi tiết:
Mức hưởng: 80% chi phí khám chữa bệnh.
Phạm vi hưởng: toàn quốc.
Thời gian hưởng: 12 tháng/năm.
Đối tượng tham gia:
Người đang sinh sống, làm việc, học tập tại Việt Nam.
Người nước ngoài đang cư trú, học tập, làm việc tại Việt Nam.
Chương trình 03: Bảo hiểm y tế dành cho người lao động đi làm việc ở nước ngoài

Giá cả:
Người tham gia thuộc hộ gia đình: 804.600 đồng/năm.
Người tham gia thuộc nhóm do người sử dụng lao động đóng: 4,5% mức lương cơ sở.
Người tham gia thuộc nhóm do ngân sách nhà nước đóng: miễn phí.
Chi tiết:
Mức hưởng: 80% chi phí khám chữa bệnh.
Phạm vi hưởng: toàn quốc.
Thời gian hưởng: 12 tháng/năm.
Đối tượng tham gia:
Người lao động Việt Nam đi làm việc ở nước ngoài.
Chương trình 04: Bảo hiểm y tế dành cho người lao động làm việc tại doanh nghiệp có thu nhập cao

Giá cả:
Người tham gia thuộc hộ gia đình: 804.600 đồng/năm.
Người tham gia thuộc nhóm do người sử dụng lao động đóng: 4,5% mức lương cơ sở.
Người tham gia thuộc nhóm do ngân sách nhà nước đóng: miễn phí.
Chi tiết:
Mức hưởng: 95% chi phí khám chữa bệnh.
Phạm vi hưởng: toàn quốc.
Thời gian hưởng: 12 tháng/năm.
Đối tượng tham gia:
Người lao động Việt Nam làm việc tại doanh nghiệp có thu nhập cao.
Chương trình 05: Bảo hiểm y tế dành cho người lao động làm việc tại doanh nghiệp có thu nhập thấp

Giá cả:
Người tham gia thuộc hộ gia đình: 32.400 đồng/tháng.
Người tham gia thuộc nhóm do người sử dụng lao động đóng: 2,25% mức lương cơ sở.
Người tham gia thuộc nhóm do ngân sách nhà nước đóng: miễn phí.
Chi tiết:
Mức hưởng: 80% chi phí khám chữa bệnh.
Phạm vi hưởng: toàn quốc.
Thời gian hưởng: 12 tháng/năm.
Đối tượng tham gia:
Người lao động Việt Nam làm việc tại doanh nghiệp có thu nhập thấp.`;
  useEffect(() => {
    const initialHistory: chatHistory[] = [
      {
        role: "user",
        parts: `Bạn sẽ trong vai 1 chatbot để trả lời câu hỏi của hệ thống bảo hiểm HealHi: ${policy}`,
      },
      {
        role: "model",
        parts:
          "Xin chào, tôi là Chatbot của hệ thống bảo hiểm HealHi, bạn cần hỏi gì ?",
      },
    ];
    setChatHistory(initialHistory);
  }, []); // Run only once on component mount

  const generateMessage = async (chat: any, message: string) => {
    try {
      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();
      const temp: chatHistory = {
        role: "model",
        parts: text,
      };
      setChatHistory((prevHistory) => [...prevHistory, temp]);
      setOutput(text);
      console.log(text);
    } catch {
      console.log("error");
    }
  };

  const handleGenerateText = async () => {
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

  return (
    <div className="text-[black]">
      <div>
        <label>
          Input:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button onClick={handleGenerateText}>Send</button>
      </div>
      <div>
        <label>
          Output:
          <textarea value={output} readOnly />
        </label>
      </div>
      <div>
        <h2>Chat History</h2>
        <ul>
          {chatHistory.map((message, index) => (
            <>
              <li key={index}>{message.role}: </li>
              <li key={index + "a"}>{formatPolicyText(message.parts)}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatWithHistoryPage;
