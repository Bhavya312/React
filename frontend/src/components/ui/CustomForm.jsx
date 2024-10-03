import propTypes from 'prop-types'

const CustomForm = ({children, submit}) => {
  return (
    <form onSubmit={submit} className='form'>
      {children}
    </form>
  )
}

CustomForm.propTypes = {
  children: propTypes.any,
  submit: propTypes.func
}

export default CustomForm
