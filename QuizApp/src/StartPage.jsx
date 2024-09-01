import { useContext } from "react";
import { motion } from "framer-motion";
import { ContextQuiz } from "./contextQuiz.jsx"

export default function StartPage({handleClick,setOfQuestions,setSetOfQuestions}){
    function handleSelect(e){
        const {value,name}=e.target;
        setSetOfQuestions(prev=>({
            ...prev,
            [name]: value
        }))
    }
    return(
        <div className="w-[100vw] h-[100vh] flex items-center justify-center text-center text-[blueviolet]">
            <motion.div
            exit={{x: -1000 }}>
                <motion.h1
                className="text-5xl font-bold"
                    initial={{y: -500, opacity: 0}}
                    animate={ {y: 0, opacity: 1 } }
                    transition={{ duration: 1.5}} >Start Quiz</motion.h1>
                <motion.p
                    className="text-2xl font-semibold my-[15px]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}>Make it happen</motion.p>
                <motion.input
                    initial={{x: 500, opacity: 0}}
                    animate={ {x: 0, opacity: 1} }
                    transition={{ delay: 0.5}}
                    className="block w-[100%] p-[5px] rounded-[5px] text-[purple] font-bold mb-[10px] border-[2px]"
                    type="number"
                    name="numberQuestion"
                    min="1" 
                    max="15"
                    value={setOfQuestions.numberQuestion}
                    onChange={(e)=>handleSelect(e)} />
                <motion.select
                    className="block w-[100%] p-[5px] rounded-[5px] text-[purple] font-bold mb-[10px] border-[2px]"
                    initial={{x: 500, opacity: 0}}
                    animate={ {x: 0, opacity: 1} }
                    transition={{ delay: 1 }} 
                    name="categoryQuestion" 
                    value={setOfQuestions.categoryQuestion} 
                    onChange={(e)=>handleSelect(e)}>
                        <option value="any">Any Category</option>
                        <option value="9">General knowledge</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="26">Celebrities</option>
                </motion.select>
                <motion.select
                    className="block w-[100%] p-[5px] rounded-[5px] text-[purple] font-bold mb-[10px] border-[2px]"
                    initial={{x: 500, opacity: 0}}
                    animate={ {x: 0, opacity: 1} }
                    transition={{ delay: 1.5}}
                    name="difficultyQuestion"
                    value={setOfQuestions.difficultyQuestion} 
                    onChange={(e)=>handleSelect(e)}>
                        <option value="any">Any difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                </motion.select>
                <motion.button
                    className="bg-[purple] p-[10px_15px] rounded-[5px] text-[#fff] font-[500] text-center m-[15px_auto]"
                    initial={{x: 500, opacity: 0}}
                    animate={ {x: 0, opacity: 1} }
                    transition={{ delay: 2}} onClick={handleClick} >Start
                </motion.button>
            </motion.div>
        </div>
    )
}