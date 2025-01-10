import PropTypes from "prop-types"
import clsx from "clsx"
import { languages } from "../../languages"

function LanguagesList(props) {

  const langEl = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }

    const lostLang = index < props.wrongGuesseCount;


    
    return (
      <span
        key={lang.name}
        className={clsx("languages", lostLang && "lost")}
        style={styles}>{lang.name}</span>
    )
  })

  return (
    <section className="lan-container">
      {langEl}
    </section>
  )
}

LanguagesList.propTypes = {
  wrongGuesseCount: PropTypes.number.isRequired
}

export default LanguagesList