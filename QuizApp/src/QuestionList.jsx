import { useEffect, useState } from "react";
import Question from "./Question.jsx";
import Result from "./Result.jsx";
// import { ContextQuiz } from "./contextQuiz.jsx"
export default function QuestionList({start,score,handleScore,handleStart,setOfQuestions}){
    const url=`https://opentdb.com/api.php?amount=${setOfQuestions.numberQuestion}&category=${setOfQuestions.categoryQuestion}&difficulty=${setOfQuestions.difficultyQuestion}&type=multiple`;
    const [questions,setQuestions]=useState([]);
    useEffect(()=>{
         fetch(url)
         .then(res=>res.json())
         .then(data=>setQuestions(data.results))
    },[])
    console.log(questions);
    
     return(
         <>
             {questions ? questions.map((question,index)=> <Question  start={start} handleScore={handleScore} key={index} question={question} />) : <h1>Loading...</h1>}
             {start && <Result questions={questions} score={score} handleStart={handleStart} />}
         </>
     )
 }