import React from 'react';
import ArrowLeft from '../assets/Icons/ArrowLeft.svg'
import ArrowRight from '../assets/Icons/ArrowRight.svg'
import Star from '../assets/Icons/Star.svg'

export default function FeedbackCard(){
    const [stepComment, setStepComment] = React.useState({
        first: 0,
        second: 1,
    });
    const Comments = [
        {name: 'Emmanuel', image: 'https://avatars.githubusercontent.com/u/102077709?v=4', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', stars: 5},
        {name: 'Rian', image: 'https://avatars.githubusercontent.com/u/68627888?v=4', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', stars: 4},
        {name: 'Thalysson', image: 'https://avatars.githubusercontent.com/u/24572520?v=4', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', starts: 5}
    ]

	function handleNextComment(){
		if(stepComment.first === Comments.length - 1){ return }
        setStepComment({first: ++stepComment.first, second : ++stepComment.second})
	}
	function handlePreviousComment(){
		if(stepComment.first != 0)
        setStepComment({first: stepComment.first - 1, second : stepComment.second - 1})
	}
    return(
        <div className="flex flex-row justify-center w-80 h-80">
            <button className="flex items-center justify-end h-full w-full NegativeMarginRight" onClick={handlePreviousComment}>
                <img src={ArrowLeft} alt="Passar comentário para esquerda" />
            </button>

            {Comments.slice(stepComment.first,stepComment.second).map((coment, index) => (
                <div key={index} className="flex flex-col cardComment items-center justify-around text-center bg-Light-default rounded-lg px-2">
                    <img className='flex w-24 h-24 NegativeMarginTop rounded-full' src={coment.image} alt="Ícone com imagem do usuário que comentou" />
                    
                    <h2 className='text-Green-dark font-medium'>{coment.name}</h2>

                    <p className="text-Green-light">{coment.text}</p>

                    <div className="flex flex-row justify-end w-full gap-1">                    
                        <img src={Star} alt="Ícone de avaliação estrela" />
                        <img src={Star} alt="Ícone de avaliação estrela" />
                        <img src={Star} alt="Ícone de avaliação estrela" />
                        <img src={Star} alt="Ícone de avaliação estrela" />
                        <img src={Star} alt="Ícone de avaliação estrela" />
                    </div>
                </div>
            ))}

            <button className="flex flex-col justify-center h-full w-full NegativeMarginLeft" onClick={handleNextComment}>
                <img src={ArrowRight} alt="Passar comentário para direita" />
            </button>
        </div>
    )
}