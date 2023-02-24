import React, { useEffect, useState } from 'react'

const FlashCard = (data) => {
const [isFlip, setIsFlip] = useState(false)
const [ques, setQues] = useState("")
const [corAns, setCorAns] = useState("")
const [incorAns, setIncorAns] = useState([])
const [options, setOptions] = useState([])



function formatter (question) {
    const textarea = document.createElement("textarea")
    textarea.innerHTML=question
    return textarea.value
}

useEffect(() => {
    console.log(data)
const {question, correct_answer, incorrect_answers}  = data?.question
setQues(question)
setIncorAns(incorrect_answers)
setCorAns(correct_answer)
const temp = [correct_answer, ...incorrect_answers].sort(() => 0.5 - Math.random())
   console.log(temp)   
   setOptions(temp)
},[])

  return (
    <div 
    className={ `card ${isFlip? "flip": ""}`}
    onClick={() => setIsFlip(!isFlip)}>
        
        <div className='front'>
            <div>{formatter(ques)} </div>
            <div>{  options.map((item, index) => 
                <div className='option' key={index}>{formatter(item)}</div>
            )}</div>
        </div>
        
       
        
        
        <div className='answer back'>{formatter(corAns)}</div>
       
        </div>
  )
}

export default FlashCard