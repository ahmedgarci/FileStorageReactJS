import { PropsType } from "../../Types/Common/PropsType"

function Input({style,func,textToDisplay}:PropsType){
    return(
        <input type="text" className={style} onChange={func} placeholder={textToDisplay ? textToDisplay : ""} />
    )
}
export {Input}