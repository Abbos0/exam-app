import React, { useRef, useState } from 'react'
import { data } from '../database/questions.db'
const Quiz = () => {
    let [index,setIndex] = useState(1)
    let [question,setQuestion] = useState(data[index-1])
    let [lock,setLock] = useState(false)
    let [score,setScore] = useState(0)
    let [result,setResult] = useState(false)
  
    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)
  
    let option_arr = [Option1,Option2,Option3,Option4]
  
  
console.log(Option1);
console.log(question);

const checkAns = (e,ans) =>{
    if(lock === false) {
         if(ans === question.ans){
            console.log("true");
            console.log(e);
            e.target.classList.add("correct")
            setLock(true)   
            setScore(prev=>prev+1)
        }
        else{
            console.log("false");
            e.target.classList.add("wrong")
            setLock(true)   
            option_arr[question.ans-1].current.classList.add("correct")
        }
    }
}

const Next = () => {
    if(data.length === index){
        setResult(true)
    }
    else{
        // setIndex(prev=>prev+1)
            setIndex(++index)
            setQuestion(data[index-1])
            setLock(false)   
            option_arr.map(option=>{
                option.current.classList.remove("correct")
                option.current.classList.remove("wrong")
                return 0;
            })
            console.log(score);
    }
}

const Reset = () => {
    setIndex(1)
    setQuestion(data[0])
    setLock(false)
    setResult(false)
    setScore(0)
}
  return (
    <div className='w-full h-[100vh] bg-[#5cc2eb] containerr '>
                <div className='relative w-full h-[100vh]'>
                    <form className='absolute  inset-0 flex items-center justify-center  '>
                        <div className=' text-center border-solid bg-[yellow] rounded-[30px]  w-[600px] p-4 text-white'>
                        {result ? <h1 className='bg-[red] text-[green] text-[40px]'>Your score is {score}</h1>:
                            <>
                            <div className='p-3 font-bold text-[30px] text-[red]'>
                                <span>00 :</span><span>10 :</span><span>58</span>
                            </div>
                            <div className='flex justify-center font-bold text-[20px] text-[black]'>
                                <div className='flex flex-col items-start'>
                                    <h1>Name :</h1>
                                    <h>Surname :</h>
                                </div>
                                <div className='flex flex-col items-start ml-4'>
                                    <p>Abbos</p>
                                    <p>Norqulov</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 py-10 mt-4  bg-[black] rounded-[20px]'>
                                <div className='flex gap-1 px-2 font-medium text-[25px]'>
                                    <h1 className=''>Question</h1>
                                    <p>{index}</p>/<p className='text-[15px]'>{data.length}</p>
                                </div>
                                <div className='flex p-2 bg-green'>
                                    <h2 className='w-[300px] text-start px-3'>{index}. {question.question}</h2>
                                        <div className='flex flex-col justify-start w-[200px] bg-grey '>
                                            <p className='border-[4px] border-solid border-[#00f7ff] rounded-[20px] mb-4 bg-[white] text-[black]' ref={Option1}  onClick={(e)=>checkAns(e,1)} >{question.option1}</p>
                                            <p className='border-[4px] border-solid border-[#00f7ff] rounded-[20px] mb-4 bg-[white] text-[black]' ref={Option2} onClick={(e)=>checkAns(e,2)} >{question.option2}</p>
                                            <p className='border-[4px] border-solid border-[#00f7ff] rounded-[20px] mb-4 bg-[white] text-[black]' ref={Option3}  onClick={(e)=>checkAns(e,3)} >{question.option3}</p>
                                            <p className='border-[4px] border-solid border-[#00f7ff] rounded-[20px] mb-4 bg-[white] text-[black]' ref={Option4}  onClick={(e)=>checkAns(e,4)} >{question.option4}</p>
                                        </div>
                                </div>
                            </div>
                            <p className='text-[white] font-bold bg-[green] text-[30px] mt-[20px] w-[200px] rounded-[20px]' onClick={Next}>Next</p>
                                </>
                                }
                            {result ? <p className='text-[white] font-bold bg-[green] text-[30px] mt-[20px] w-[200px] rounded-[20px]' onClick={Reset}>Reset</p>: " "}
                        </div>
                    </form>
                </div>
    </div>
  )
}

export default Quiz
