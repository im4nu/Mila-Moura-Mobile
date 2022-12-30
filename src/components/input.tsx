import sendIcon from '../assets/Icons/Send.svg'

export default function MailInput(){
    return(
        <div className="flex flex-row items-cente">
            <input
             className="flex text-Green-light pl-2 flex-row items-center inputRounded"
             type="text"
             placeholder='Seu Melhor Email'
             >
             </input>
            <button className="flex items-center SendButtonRounded bg-Green-dark py-2 px-4">
                <img src={sendIcon} alt="Botão de enviar" />
            </button>
        </div>
    )
}