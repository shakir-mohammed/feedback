import PropTypes from 'prop-types'
function Buttton({children, version,type, isDisabled}) {
  return (
   <button type={type} disabled={isDisabled} className={`btn btn-${version}  `}>{children}</button>
  )
}

Buttton.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}
Buttton.propTypes = {
    children: PropTypes.node,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Buttton