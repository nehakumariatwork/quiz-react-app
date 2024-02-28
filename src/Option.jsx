const Option = ({option, index,selectedOption, answer,optionClick}) =>{
    //  const handleClick = () =>{
    //   console.log(index);
    //  }
     
      return(
        <div className={index === answer ? (
          "correctAnswer"
        ) : selectedOption === index && selectedOption !== answer ? "incorrectAnswer"
          : ""} onClick={() =>{optionClick(index)}}> {option}
    
        </div>
      )
     }
     export default Option