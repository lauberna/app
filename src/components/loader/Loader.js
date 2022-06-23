import {CgMusicSpeaker} from 'react-icons/cg'


import '../loader/loader.css'
import 'animate.css'

function loader() {
  return (
    <div className='div'>
      <CgMusicSpeaker className='animate__animated animate__backOutDown logoLoader'/>
    </div>    
  )
}

export default loader