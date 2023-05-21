import React ,{useRef} from 'react'
import { useNavigate} from "react-router-dom"
function VodInput() {
   const inputRef=useRef();
   const nav=useNavigate();
const onSearchClick=()=>{
  nav(`./?category=${inputRef.current.value}`)
}

  return (
      <header className='container-fluid bg-dark p-2'>
        <div className='container'>
          <div className='row'>
            <div className='logo col-4'>
              <h2 className='text-white'> My vode</h2>
            </div>
            <nav className='d-flex col-md-4'>
              <input ref={inputRef} type='search' className='form-control' placeholder='search...' />
              <button onClick={onSearchClick} className='btn btn-warning'>Search</button>
            </nav>
          </div>
        </div>
    </header>
  )
}

export default VodInput