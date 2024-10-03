import propTypes from 'prop-types';

const Button = ({name}) => {
  return (
    <>
     <button>{name}</button> 
    </>
  )
}
Button.propTypes = {
  name: propTypes.string
}
export default Button
