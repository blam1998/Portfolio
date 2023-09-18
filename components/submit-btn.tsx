import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn(){
    const {pending} = useFormStatus();

    return(
        <button 
        className = "rounded-xl text-xs bg-slate-200 hover:bg-lime-200/40 p-3 font-semibold" 
        type = "submit"
        disabled = {pending}
        >
            {pending? 
            (<div className = "p-3 animate-spin rounded-xl w-[100%] border-b-2 border-white"></div>) : 
            <>
                Submit{""}
            </>
            }
        </button>
    )
}