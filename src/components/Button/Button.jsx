export const Button = ({onClick, className, text, icon}) => {
    return (
        <button onClick={() => onClick && onClick()} className={className && className}>{icon && icon}{text && text}</button>
    )
}