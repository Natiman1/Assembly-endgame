// import PropTypes from "prop-types"
import { languages } from "../../languages"

function LanguagesList() {

  const langEl = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span
        key={lang.name}
        className='languages'
        style={styles}>{lang.name}</span>
    )
  })


  return (

    <section className="lan-container">
      {langEl}
    </section>


  )
}

// LanguagesList.propTypes = {
//     langEl: PropTypes.string.isRequired,
// }

export default LanguagesList