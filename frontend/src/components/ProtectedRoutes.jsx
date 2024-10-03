import propTypes from 'prop-types';

const ProtectedRoutes = ({children}) => {

  const accessToken = localStorage.getItem("acccess_token");
  if (!accessToken || accessToken === null) {
    return (<>
      Login first
    </>);
  }
  return (
    <>
      {children}
    </>
  )
}

ProtectedRoutes.propTypes = {
  children: propTypes.any
}
export default ProtectedRoutes
