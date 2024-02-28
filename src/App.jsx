import { useState } from 'react'
import Data from './Data.json'
import Question from './Question'
import Option from './Option'
import './App.css'
function App() {

    // console.log(Deta[0].question);
    // console.log(Deta[0].option);
    const [select, setSelect] = useState(0)     
    const [selectedOption, setSelectedOption] =useState ("")
    const [correctAnswer, setcorrectAnswer] = useState(null)

    function handleClick() {
        setSelect(select + 1)
        setSelectedOption(null)
        setcorrectAnswer(null)
        if (select === 2) {
            setSelect(0)
        }
    }

    function backClick() {
        setSelect(select - 1)
        setSelectedOption(null)
        setcorrectAnswer(null)
        if (select === 0) {
            setSelect(2)
        }
    }

    function optionClick(i) {
        setSelectedOption(i)
        setcorrectAnswer(Data[select]. answer)
        console.log(i);
    }

    return (
        <div className='content-div'>
            <h1><u>QUIZZ</u></h1>
            <Question question={Data[select].question} />
            {
                Data[select].option.map((option,i) =>{
                    return(
                        <Option key={i} option={option} answer={correctAnswer} optionClick={optionClick} selectedOption={selectedOption} index={i}/>
                    )
                })
            }
            <div className='click-button'>
            <button className='back-click' onClick={backClick}>Back</button>
            <button key={select} onClick={handleClick}>Next</button>
            </div>
            </div>

    )
}

export default App