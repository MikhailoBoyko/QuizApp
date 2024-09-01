import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import {motion} from "framer-motion";
// import { ContextQuiz } from "./contextQuiz.jsx"
export default function Question({question,start,handleScore}){
    const [answers,setAnswers]=useState(shuffle());
    useEffect(()=>{
        handleScore(answers.some(item=>item.checked && item.correct))
     },[start])
    function handleClick(id){
        const newArr=answers.map(item=>(
            {...item, checked: false })
            )
        setAnswers(newArr);
        setAnswers(prev=>prev.map(item=>item.id===id ? {...item, checked: true} : item))
    }
    function shuffle(){
        const shuffledArray=[...question.incorrect_answers,question.correct_answer]
        .sort(()=>Math.random()-.5).map(answer=>(
                answer==question.correct_answer
                ? {answer, correct: true, checked: false, id: nanoid()}
                : {answer, correct: false, checked: false, id: nanoid()}
            ))
        return shuffledArray;
    }
    return(
        <article 
        className="mb-[15px] p-[15px] rounded-[5px] text-[#fff]"
        style={{ backgroundColor: (start && answers.some(item=>item.checked && item.correct)) ? "green" : (start && !answers.some(item=>item.checked && item.correct)) ? "red" : "#191970"}}>
            <h3>{question.question}</h3>
            <div className="flex gap-[35px] mt-[15px] sm:flex-col sm:gap-[15px] sm:mt-[15px]">
            {answers
            .map((item,index)=>(
                <motion.div
                className="text-[#fff] p-[5px_15px] rounded-[5px] border-[2px] border-[#fff] border-solid"
                whileHover={{scale: 1.2}} initial={{x: "100vw"}} animate={{x:0, delay: index*2}} onClick={()=>handleClick(item.id)} style={{ backgroundColor: item.checked ? "gray" : null}} key={item.id}>{item.answer}</motion.div>
                                )
                        )
                        
            }
            </div>
        </article>
    )
}