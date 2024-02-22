import { useState, useEffect, useRef } from "react";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";
import { AiFillSound, AiFillStar } from "react-icons/ai";
import axios from "axios";
import {
  dataTraCau,
  favourite,
  favouriteWord,
  vocabulary,
} from "@/types/typeSystem";
import Link from "next/link";
import {
  addListFavourite,
  listFavouriteUser,
  removeElementFavourite,
} from "../api/favourite";
import { GetLimitVocabulary } from "../api/vocabulary";
import { GetMyFlipById } from "../api/myflip";

function SpeechToText(this: any) {
  const urlApi = process.env.URL_APP;
  const [isActive, SetIsActive] = useState<boolean>(true);
  const [reset, setRest] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<number>(0);
  const [indexWord, setIndexWord] = useState<number>(0);
  const [data, getData] = useState<vocabulary[]>([]);
  const [valueSelect, setValueSelect] = useState<string>("10");
  const [traCauValue, setTraCauValue] = useState<dataTraCau>({} as dataTraCau);
  const [favourite, setFavourite] = useState<vocabulary[]>([]);
  const updateActive = async () => {
    await meanWord(indexWord);
    SetIsActive(!isActive);
  };
  const getFavourite = async () => {
    const WordData: vocabulary[] = await listFavouriteUser(dataUser);
    setFavourite(WordData);
  };
  const deleteFavourite = async () => {
    const DeleteWord: favourite = {
      own: dataUser,
      WordID: data?.[indexWord]?.WordID,
    };
    const result = await removeElementFavourite(DeleteWord);
    if (result) getFavourite();
  };
  const addFavourite = async () => {
    const AddWord: favourite = {
      own: dataUser,
      WordID: data?.[indexWord]?.WordID,
    };
    addListFavourite(AddWord).then(() => {
      getFavourite();
    });
  };
  const meanWord = async (index: number) => {
    if (data) {
      await axios
        .get(
          `https://api.tracau.vn/${process.env.DIC_API_KEY}/s/'${data[index]?.Word}'/en`
        )
        .then((result) => {
          setTraCauValue(() => result.data);
        });
    }
  };
  const handlePlay = () => {
    textToSpeech(data?.[indexWord]?.Word);
  };
  const handleNext = async () => {
    if (indexWord === data?.length - 1) return;
    setIndexWord(indexWord + 1);
    SetIsActive(true);
  };

  const handlePrev = async () => {
    if (indexWord != 0) {
      setIndexWord(indexWord - 1);
    }
    SetIsActive(true);
  };

  const handleStar = async () => {
    let login = sessionStorage.getItem("ID");
    if (login === undefined || login === "false" || login === null) {
      window.location.href = "/login";
    }
    console.log(data?.[indexWord]?.WordID);
    favourite.some((item) => item.WordID == data?.[indexWord]?.WordID)
      ? deleteFavourite()
      : addFavourite();

    setValueSelect(() => valueSelect);
  };
  const textToSpeech = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const voice = voices.find((voice) => voice.lang === "en-US");
    utterance.voice = voice || null;
    synth.speak(utterance);
  };
  const handleDropDown = (value: string) => {
    let login = sessionStorage.getItem("ID");
    if (
      (login === undefined || login === "false" || login === null) &&
      value === "favourite"
    ) {
      window.location.href = "/login";
    }
    setValueSelect(() => value);
  };
  useEffect(() => {
    getFavourite();
    setDataUser(() => parseInt(sessionStorage.getItem("ID") ?? "0"));
    const getWord = async () => {
      const value: string = valueSelect.toString();
      if (valueSelect != "favourite" && value != "flip") {
        GetLimitVocabulary(parseInt(valueSelect)).then((result) => {
          getData(() => result);
        });
      } else if (value == "flip") {
        GetMyFlipById(dataUser).then((result) => {
          getData(() => result);
        });
      } else {
        listFavouriteUser(dataUser).then((result) => {
          console.log(result);
          getData(() => result);
        });
      }
      setIndexWord(0);
    };
    getWord();
  }, [valueSelect, dataUser]);
  return (
    <div className="h-[90vh] w-[100vw] bg-white">
      <div className="flex justify-between px-[50px] pt-[30px]">
        {valueSelect.toString() === "flip" ? (
          <Link
            href={"/flip/add-flip"}
            className="bg-[#0077ff] w-[120px] h-[40px] flex justify-center items-center rounded-lg hover:bg-[#1E429F]"
          >
            Add Vocabulary
          </Link>
        ) : (
          <div></div>
        )}
        <select
          title="select"
          className=" bg-[#182025] rounded-[10px] mr-[40px]"
          onChange={(e) => handleDropDown(e.target.value)}
        >
          <option value="10" defaultChecked>
            10 từ vựng
          </option>
          <option value="20">20 từ vựng</option>
          <option value="30">30 từ vựng</option>
          <option value="favourite">Danh sách yêu thích</option>
          <option value="flip">Từ vựng của tôi</option>
        </select>
      </div>
      <div className="relative flex justify-center h-[60vh] items-center">
        {valueSelect.toString() != "flip" && (
          <button
            title="submit"
            className="absolute top-[13%] ml-[30%]"
            onClick={handleStar}
          >
            <AiFillStar
              className={`h-[30px] w-[30px] ${
                favourite?.some(
                  (item) => item.WordID === data?.[indexWord]?.WordID
                )
                  ? "text-[#fcfc3a]"
                  : "hover:text-[#aeae40]"
              }`}
            />
          </button>
        )}

        <button
          title="submit"
          onClick={updateActive}
          className="h-[50vh] w-[80vh] rounded-[30px]"
        >
          <div
            key={data?.[indexWord]?.WordID}
            className={`transition duration-1000 h-[50vh] w-[80vh] rounded-[30px] ${
              isActive ? "bg-[#6b6be0]" : "bg-[gray]"
            }`}
          >
            {isActive === true ? (
              <div className=" flex h-[50vh] justify-center items-center ">
                <b> {data?.[indexWord]?.Word}</b>
              </div>
            ) : (
              <div className=" flex h-[50vh] justify-center items-center ">
                <div>
                  <b> {data?.[indexWord]?.mean}</b>
                  <div>Example :</div>
                  <div className="max-w-[70vh]">
                    <div className="">
                      <div className="flex justify-start">
                        <div>1. </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: traCauValue?.sentences?.[0]?.fields.en,
                          }}
                        ></div>
                        <p> : {traCauValue?.sentences?.[0]?.fields.vi}</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-start">
                        <div>2. </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: traCauValue?.sentences?.[1]?.fields.en,
                          }}
                        ></div>
                        <p> : {traCauValue?.sentences?.[1]?.fields.vi}</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-start">
                        <div>3. </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: traCauValue?.sentences?.[2]?.fields.en,
                          }}
                        ></div>
                        <p> : {traCauValue?.sentences?.[2]?.fields.vi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </button>
      </div>
      <div className="flex justify-between w-[80vh] m-auto ">
        <button title="voice" onClick={handlePrev}>
          <BiSkipPreviousCircle className="mt-[10px] text-[40px] text-[gray] ml-[20px]" />
        </button>
        <button title="voice2" onClick={handlePlay}>
          <AiFillSound className="text-[35px] mt-[15px] text-[gray]" />
        </button>
        <button title="voice3" onClick={handleNext}>
          <BiSkipNextCircle className="mt-[10px] text-[40px] text-[gray] mr-[20px]" />
        </button>
      </div>
    </div>
  );
}

export default SpeechToText;
