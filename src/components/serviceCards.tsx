import React, { useEffect } from "react";
import Chat from '../assets/Images/GroupW/CardChat.png'
import Wine from '../assets/Images/GroupW/CardWine.png'
import Work from '../assets/Images/GroupW/CardWork.png'

import ChatIcon from '../assets/Icons/Chat.svg'
import WineIcon from '../assets/Icons/Wine.svg'
import WorkIcon from '../assets/Icons/Work.svg'

export default function ServiceCars(){

    return(
        <div className='flex flex-col w-2/4 justify-around gap-24 my-6'>
            <div className='flex flex-col gap-4 text-center justify-center items-center BgServiceCard px-4 py-6'>
                <div className="flex flex-col items-center">
                    <img className='w-2/4 NegativeMarginTop' src={Chat} alt="Ícone Trabalho, Vinho, Mulher" />
                    <p id="p1" className="serviceCardActiveP text-Light-default">Lorem Ipsum is simply dummy text of the printing and</p>
                </div>

                <img className='w-7 h-7' src={ChatIcon} alt="Ícone Trabalho, Vinho, Mulher" />
            </div>

            <div className='flex flex-col gap-4 text-center justify-center items-center BgServiceCard px-4 py-6'>
                <div className="flex flex-col items-center">
                    <img className='w-2/4 NegativeMarginTop' src={Wine} alt="Ícone Trabalho, Vinho, Mulher" />
                    <p id="p2" className="serviceCardActiveP text-Light-default">Lorem Ipsum is simply dummy text of the printing and</p>
                </div>

                <img className='w-7 h-7' src={WineIcon} alt="Ícone Trabalho, Vinho, Mulher" />
            </div>

            <div className='flex flex-col gap-4 text-center justify-center items-center BgServiceCard px-4 py-6'>
                <div className="flex flex-col items-center">
                    <img className='w-2/4 NegativeMarginTop' src={Work} alt="Ícone Trabalho, Vinho, Mulher" />
                    <p id="p3" className="serviceCardActiveP text-Light-default">Lorem Ipsum is simply dummy text of the printing and</p>
                </div>

                <img className='w-7 h-7' src={WorkIcon} alt="Ícone Trabalho, Vinho, Mulher" />
            </div>
        </div>
    )
}