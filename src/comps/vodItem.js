import { useNavigate } from "react-router-dom";


function VodItem(props) {


  let mysrc = props.obj.previewURL;
  const nav = useNavigate();
   
  const onClickInfo = () => {
    //  nav(`./info`)
     nav(`./info/?id=${props.obj.id}`)
    //  http://localhost:3000/?category=sky
  }

  return (
    <div className='col-md-4 p-2' >
      <div className='border p-2 h-100 overflow-hidden shadow'>
        <img src={mysrc} className='float-start me-2 w-25' alt="img" />
        <h3>year:{props.obj.user}</h3>
        <h4>like:{props.obj.likes}</h4>
        <button onClick={onClickInfo} className='btn btn-dark'>More info</button>
      </div>
    </div>
  )
}

export default VodItem