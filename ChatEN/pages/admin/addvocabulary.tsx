// Trong pages/index.tsx

import { AddVocabulary, vocabulary } from "@/types/typeSystem";
import { useRef } from "react";
import { CreateNewWord } from "../api/vocabulary";

const AddListVocabulary = () => {
  const word = useRef<any>();
  const mean = useRef<any>();

  const handleAddVocabulary = async () => {
    const value: vocabulary = {
      WordID: 0,
      Word: word.current?.value,
      mean: mean.current?.value,
    };
    const result = await CreateNewWord(value);
    if (result === true) {
      handleButtonClick(true);
    } else handleButtonClick(false);

    word.current.value = "";
    mean.current.value = "";
  };
  const handleButtonClick = (content: boolean) => {
    if (content === true) {
      window.alert("Thêm từ vựng thành công");
    } else window.alert("Thêm từ vựng thất bại");
  };
  return (
    <div className="container mx-auto p-4 h-[90vh]  bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-[black]">
        ADD MY VOCABULARY
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

export default AddListVocabulary;
