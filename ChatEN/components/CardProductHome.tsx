import React from 'react';
import { formatPrice, calDiscount, viewDiscount } from '../helper/dataHelper';
import { AiFillStar } from 'react-icons/ai';
import { Course } from '@/types/typeCourse';
import axios from 'axios';

type Props = {
    item: Course
}
// )
const CardProductHome = (props: Props) => {
    const data = props.item
    const handleBuy = async()=>{
        const apiURL = process.env.URL_APP;
        axios.post(`${apiURL}Course/postbuy`,{
            idCourse:data.ID,
            idPerson : sessionStorage.getItem('ID'),
            price : data.Price,
        }).then(() => {
           window.alert('Buy books successfully')
        })
    }
 
    return (
        <div  >
            <div className="flex flex-col items-start justify-start gap-[16px]  w-[270px] hover:shadow-xl hover:shadow-red-200 rounded-[10px] pb-[10px]">
                <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0 bg-[#F5F5F5]">
                    {
                        data.Discount === 0 ? (
                            <div></div>
                        ) : (
                            <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center bg-[#DB4444] z-10">
                                <div className="relative leading-[18px] font-[600] text-[white] text-[12px]">-{viewDiscount(data.Discount)}%</div>
                            </div>
                        )
                    }
                    <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[190px] rounded-[20px]  overflow-hidden">
                        <img
                            className="relative top-[calc(50%_-_76px)] left-[calc(50%_-_86px)] w-[172px] h-[172px] rounded-[20px] hover:rounded-[20px]  hover:transform hover:scale-150 hover:transition-transform"
                            alt=""
                            src={data.Photo}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start pl-[5px] gap-[8px] text-base text-text2 p-[5px] drop-shadow-sm">
                    <div className="relative leading-[24px] font-medium w overflow-hidden w-[270px] text-[20px] whitespace-nowrap text-ellipsis ">
                        {data.Name}
                    </div>

                    <div className="flex flex-row items-start justify-between px-[5px] w-[100%] gap-[12px] text-secondary-2">
                        <div className="relative leading-[24px] font-medium text-[#DB4444]">   {formatPrice(calDiscount(data.Price, data.Discount))}</div>
                        <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5] text-[black]">
                            {formatPrice(data.Price)}
                        </div>
                    </div>
                    {data.Rating != 0 ? (
                        <>
                            <div className="flex pl-[5px] flex-row items-start justify-start gap-[8px] text-sm">
                                Rating : {data.Rating}
                                <div className="flex flex-row items-start justify-start">

                                    <AiFillStar className='text-[#d6d654]' />

                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-row items-start justify-start gap-[8px] text-sm">

                                <div className="flex flex-row items-start justify-start">
                                </div>
                                <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">

                                </div>
                            </div>
                        </>
                    )
                    }
                    <div className='flex justify-center items-center h-[50px] w-[100%]'>
                        <button className='bg-[#5177bd] h-[100%] w-[50%] rounded-lg hover:bg-[#1E429F] font-[700]' onClick={handleBuy}>
                            BUY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardProductHome;