export const UserImage = ({imgSrc, alt}) => {
    return (
        <div className="w-10">
            <img 
                className="w-full rounded-full object-cover" 
                src={
                    imgSrc ? 
                    imgSrc : 
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Xdf9OyXn9BpWL30gb6cpyLnkiCCbSaH8wVB1007o9WpYBDgb6J1_afDQTdJuqwgE3xM&usqp=CAU"
                } 
                alt={alt && alt} />
        </div>
    )
}