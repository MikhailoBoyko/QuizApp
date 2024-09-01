import { useState } from "react";
import QuestionList from "./QuestionList.jsx";
// import { ContextQuiz } from "./contextQuiz.jsx"

export default function Quiz({handleStart,setOfQuestions}){
    const[start,setStart]=useState(false);
    const[score,setScore]=useState(0);
    function handleScore(res){
        if(res){
            setScore(prev=>prev+1)
        }
    }
    return(
        <main className="p-[25px]">
            <QuestionList start={start} score={score} handleScore={handleScore} handleStart={handleStart} setOfQuestions={setOfQuestions} />
            <div className="flex items-center justify-center">
                <button
                    className="unset bg-[purple] p-[10px_15px] rounded-[5px] text-[#fff] font-[500] text-center m-[15px_auto]"
                    onClick={()=>setStart(true)}>Check
                </button>
            </div>
        </main>
    )
}