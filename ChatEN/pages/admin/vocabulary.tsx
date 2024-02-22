// Trong pages/index.tsx

import axios from "axios";
import { useState, useRef } from "react";

interface Vocabulary {
  word: string;
  mean: string;
}
const url = process.env.URL_APP;
const Vocabulary = () => {
  const word = useRef<any>();
  const mean = useRef<any>();

  const handleAddVocabulary = async () => {
    const voca: Vocabulary = {
      word: word.current?.value,
      mean: mean.current?.value,
    };
    await axios.post(`${url}admin/addword`, voca).then((result) => {
      if (result.data === "success") {
        handleButtonClick("success");
      } else handleButtonClick("False");
    });

    word.current.value = "";
    mean.current.value = "";
  };
  const handleButtonClick = (content: string) => {
    if (content === "success") {
      window.alert("Thêm từ vựng thành công");
    } else window.alert("Thêm từ vựng thất bại");
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-[black]">
        ADD VOCABULARY
      </h1>

      <div className="items-center mb-8 text-[black]">
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Từ vựng"
            ref={word}
            className="border p-3 mr-2 w-[50%] rounded-[10px] mt-[30px]"
          />
        </div>
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Định nghĩa"
            ref={mean}
            className="border p-3 mr-2 w-[50%] rounded-[10px] mt-[60px]"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAddVocabulary}
            className="bg-blue-500 text-white p-3 rounded-md mt-[30px]"
          >
            Thêm từ vựng
          </button>
        </div>
      </div>
    </div>
  );
};
Vocabulary.layout = "admin";
export default Vocabulary;
