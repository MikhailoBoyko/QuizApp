// import { useContext } from "react";
import Confetti from 'react-confetti'
// import { ContextQuiz } from "./contextQuiz.jsx"
export default function Result({handleStart, questions, score}){
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-bgdrop ">
            <div className="z-10 w-[100vw] h-[100vh] flex flex-col items-center justify-center text-center text-[#fff]">
                {score===questions.length && <Confetti />}
                <h1>Your result : <span className="block">{score} / {questions.length}</span></h1>
                <button
                className="bg-[purple] p-[10px_15px] rounded-[5px] text-[#fff] font-[500] text-center m-[15px_auto]"
                onClick={handleStart}>Play Again</button>
            </div>
        </div>
    )
}