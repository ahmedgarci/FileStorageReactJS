import { PropsType } from "../../Types/Common/PropsType";

export default function Label({style,textToDisplay}:PropsType){
    return(
        <label className={style}>
            {textToDisplay}
        </label>
    )
}