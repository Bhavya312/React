import propTypes from 'prop-types'

const Input = ({type, name, label, props}) => {
  
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...props}/>
    </>
  )
}

Input.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  label: propTypes.string,
  props: propTypes.object
}

export default Input
