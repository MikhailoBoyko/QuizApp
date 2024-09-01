import { useEffect, useState } from "react";
import StartPage from "./StartPage.jsx";
import Quiz from "./Quiz.jsx";
// import { ContextQuiz } from "./contextQuiz.js"

export default function Welcome(){
    const [launch,setLaunch]=useState(false);
    const [setOfQuestions,setSetOfQuestions]=useState({
        numberQuestion: "1",
        categoryQuestion: "",
        difficultyQuestion: ""
    });
    
    function handleClick(){
        setLaunch(true);
    }
    function handleStart(){
        setLaunch(false);
        setSetOfQuestions({
        numberQuestion: "1",
        categoryQuestion: "any",
        difficultyQuestion: "any"
    });
    }
    console.log(setOfQuestions)
    return(
        <main>
            {!launch && <StartPage setOfQuestions={setOfQuestions} setSetOfQuestions={setSetOfQuestions} handleClick={handleClick} />}
            {launch && <Quiz setOfQuestions={setOfQuestions} setSetOfQuestions={setSetOfQuestions} handleStart={handleStart} />}
        </main>
    )
}