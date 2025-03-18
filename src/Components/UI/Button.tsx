import { PropsType } from "../../Types/Common/PropsType"

function Button({textToDisplay,style,func}:PropsType){
    return(
        <button className={style} onClick={func}>
            {textToDisplay} 
        </button>
    )
}
export {Button}