interface MainButtonProps{
    field: string;
}

export default function MainButton({field} : MainButtonProps){
    return(
        <button className="bg-Green-light text-Light-default rounded px-4 py-4 text-sm">
            {field}
        </button>
    )
}