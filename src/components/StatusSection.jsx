import PropTypes from "prop-types"
import clsx from "clsx"


function StatusSection(props) {

  console.log(props.isLastGuessIncorrect);

  function renderStatus() {
    if (!props.isGameOver && props.isLastGuessIncorrect) {
     return (<p className="farewell-text"> {props.farewellText}</p>)
    }
    if (props.isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    } 
    if (props.isGameLost) {  
      return (
        <>
          <h2>Game over!!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
    return null
  }

  return (
    <section className={clsx("status",{
      win: props.isGameWon,
      lose: props.isGameLost,
      farewell: !props.isGameOver && props.isLastGuessIncorrect
    })}>
        {renderStatus()}
    </section>
  )
}

StatusSection.propTypes = {
  isGameWon: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  isGameLost: PropTypes.bool.isRequired,
  isLastGuessIncorrect: PropTypes.bool.isRequired,
  farewellText: PropTypes.string.isRequired
}

export default StatusSection