export const UserImage = ({imgSrc}) => {
    return (
        <div className="w-10">
            <img 
                className="w-full rounded-full object-cover" 
                src={imgSrc && imgSrc} 
                alt="user" />
        </div>
    )
}