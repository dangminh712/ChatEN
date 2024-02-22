import { Inter } from "next/font/google";
import React, { useRef, useState, useEffect } from "react";
import { getCourse } from "./api/sales";
import { Course } from "@/types/typeCourse";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import CardIndex from "@/components/CardIndex";
import LoadingEffect from "@/components/loading";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef<any>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [Prouducts, SetProducts] = useState<Course[]>([]);
  const scrollLeft = () => {
    if (scrollPosition < 400) {
      setScrollPosition(0);
    } else {
      containerRef.current.scrollTo({
        left: scrollPosition - 400,
        behavior: "smooth",
      });
      setScrollPosition(scrollPosition - 400);
    }
  };

  const scrollRight = () => {
    containerRef.current.scrollTo({
      left: scrollPosition + 400,
      behavior: "smooth",
    });
    setScrollPosition(scrollPosition + 400);
  };
  useEffect(() => {
    getCourse().then((result) => SetProducts(result));
  }, []);
  return (
    <div className="min-h-[90vh] bg-[#F7F8FA]">
      <div className="text-[black] container m-auto max-xl:p-0 p-[50px] max-xl:w-[80vw] w-full ">
        <h1 className="text-[38px] font-[700] font-mono">ChatEN</h1>
        <h2 className="text-[20px] font-[500] font-mono">
          {" "}
          Unlock the power of English and embark on a journey of language
          mastery.
        </h2>
        <div className="flex flex-row items-start justify-start gap-[8px] ">
          <button
            onClick={scrollLeft}
            className="bg-[#b9b9b9] w-[40px] h-[40px] rounded-full"
          >
            {" "}
            <AiFillCaretLeft className="m-[auto]" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-[#b9b9b9] w-[40px] h-[40px] rounded-full"
          >
            {" "}
            <AiFillCaretRight className="m-[auto]" />
          </button>
        </div>
        <div
          className="w-full flex flex-row items-start justify-start gap-[30px] text-xs text-text transition-all overflow-y-hidden overflow-x-hidden"
          ref={containerRef}
        >
          {Prouducts.length > 0 ? (
            Prouducts.map((item) => <CardIndex item={item} key={item.ID} />)
          ) : (
            <LoadingEffect></LoadingEffect>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4 max-xl:m-0 max-xl:gap-0 mt-[20px]">
          <Link
            href="chat/chat-bot"
            className="h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md"
          >
            <div className="flex items-center h-[25vh]">
              <img
                title="img"
                src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
                className=" mx-[20px] h-[20vh] w-[20vh] rounded-[20px] "
              ></img>
              <div className="flex self-start my-[2.5vh] mx-[4px]">
                <div>
                  <p className="text-[18px] font-[600] max-lg:hidden block">
                    {" "}
                    Bot Chat{" "}
                  </p>
                  <p className="text-[13px] ml-[5px] max-xl:hidden block">
                    Engage in interactive conversations with our intelligent
                    chatbot.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/course/your-course"
            className="h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md"
          >
            <div className="flex items-center h-[25vh]">
              <img
                title="img"
                src="/voice.jpg"
                className=" mx-[20px] h-[20vh] w-[20vh] rounded-[20px] "
              ></img>
              <div className="flex self-start my-[2.5vh] mx-[4px]">
                <div>
                  <p className="text-[18px] font-[600] max-lg:hidden block">
                   Your Books{" "}
                  </p>
                  <p className="text-[13px] ml-[5px] max-xl:hidden block md:hhi">
                  Books you have purchased{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="chat/search-word"
            className="h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md"
          >
            <div className="flex items-center h-[25vh]">
              <img
                title="img"
                src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
                className=" mx-[20px] h-[20vh] w-[20vh] rounded-[20px] "
              ></img>
              <div className="flex self-start my-[2.5vh] mx-[4px]">
                <div>
                  <p className="text-[18px] font-[600] max-lg:hidden block">
                    {" "}
                    Word And Video Search{" "}
                  </p>
                  <p className="text-[13px] ml-[5px] max-xl:hidden block">
                    Discover words in sentences with our word search tool
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="flip/flip-vocabulary"
            className="h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md"
          >
            <div className="flex items-center h-[25vh]">
              <img
                title="sg"
                src="https://images.squarespace-cdn.com/content/v1/5d577d5ad3fea90001736e05/1618901038734-D9X7HTDS83C9QT6ILWRG/03-VOCAB-MATCH-B.jpg?format=1500w"
                className=" mx-[20px] h-[20vh] w-[20vh] rounded-[20px] "
              ></img>
              <div className="flex self-start my-[2.5vh] mx-[4px]">
                <div>
                  <p className="text-[18px] font-[600] max-lg:hidden block">
                    {" "}
                    Flip Vocabulary{" "}
                  </p>
                  <p className="text-[13px] ml-[5px] max-xl:hidden block">
                    {" "}
                    Master vocabulary through interactive flashcards.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/auth/login"
            className="h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md"
          >
            <div className="flex items-center h-[25vh]">
              <img
                title="sg"
                src="./login.jpg"
                className=" mx-[20px] h-[20vh] w-[20vh] rounded-[20px] "
              ></img>
              <div className="flex self-start my-[2.5vh] mx-[4px]">
                <div>
                  <p className="text-[18px] font-[600] max-lg:hidden block">
                    {" "}
                   Sign In{" "}
                  </p>
                  <p className="text-[13px] ml-[5px] max-xl:hidden block">
                    {" "}
                    Sign In to Your Account
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/auth/signup"
            className="h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md"
          >
            <div className="flex items-center h-[25vh]">
              <img
                title="sg"
                src="./signup.jpg"
                className=" mx-[20px] h-[20vh] w-[20vh] rounded-[20px] "
              ></img>
              <div className="flex self-start my-[2.5vh] mx-[4px]">
                <div>
                  <p className="text-[18px] font-[600] max-lg:hidden block">
                    {" "}
                    Sign Up
                  </p>
                  <p className="text-[13px] ml-[5px] max-xl:hidden block">
                    {" "}
                    Create Your Account
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
