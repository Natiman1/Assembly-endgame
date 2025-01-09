

function Keyboard() {

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const keybord = alphabet.split("").map((keys, index) => {
    for (let i = 0; i < alphabet.length; i++) {
      return (
        <button key={index} className='keys' >{keys.toUpperCase()}</button>
      )
    }
  })

  return (
    <section className="keyboard">{keybord}</section>
  )
}

export default Keyboard
