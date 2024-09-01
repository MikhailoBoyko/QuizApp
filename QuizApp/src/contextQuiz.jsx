import { createContext, useState } from "react";

export const ContextQuiz=createContext({});
export default function ContextQuizProvider({children}){
    const [launch,setLaunch]=useState(false);
    // const [setOfQuestions,setSetOfQuestions]=useState({
    //     numberQuestion: "1",
    //     categoryQuestion: "",
    //     difficultyQuestion: ""
    // });
    const[start,setStart]=useState(false);
    const[score,setScore]=useState(0);
    function handleScore(res){
        if(res){
            setScore(prev=>prev+1)
        }
    }
    function handleClick(){
        setLaunch(true);
    }
    // function handleStart(){
    //     setLaunch(false);
    //     setStart(false);
    //     setSetOfQuestions({
    //     numberQuestion: "1",
    //     categoryQuestion: "",
    //     difficultyQuestion: ""
    // });
    // }
    return(
        <ContextQuiz.Provider value={{
            launch,
            setLaunch,
            // setOfQuestions,
            // setSetOfQuestions,
            start,
            setStart,
            score,
            setScore,
            handleScore,
            handleClick,
            // handleStart
            }}>
            {children}
        </ContextQuiz.Provider>

    )
}