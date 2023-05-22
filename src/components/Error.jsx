const Error = ({children}) => {
  return (
    <div className='FormError'>
      <p>{children}</p>
    </div>
  )
}

/* 
const Error = ({mensaje}) => {
  return (
    <div className='FormError'>
      <p>{mensaje}</p>
    </div>
  )
}
 */
export default Error