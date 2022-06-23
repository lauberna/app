import {Link} from 'react-router-dom'

import './nofound.css'

function NotFound() {
  return (
    <>
      <div className='text'>- Paguina no encontrada, porfavor revise la url -</div>
      <Link to='/'>
        <button className='btn1'>Volver al inico</button>
      </Link>
    </>
  )
}

export default NotFound