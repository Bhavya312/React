import propTypes from 'prop-types'

const TextArea = ({label, name, cols, rows, props}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} cols={cols} rows={rows} {...props}>  
      </textarea>
    </>
  )
}

TextArea.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  cols: propTypes.string,
  rows: propTypes.string,
  props: propTypes.any
}

export default TextArea
