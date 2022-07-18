import { useNavigate } from 'react-router-dom';

export default function Studentadded() {
  const navigate = useNavigate();
  return (
    <div>
    <h3>You have been successfully Registered!</h3>
    
    <button className="btn btn-primary btnsubmit" style={{ "border": "none" }} onClick={() => navigate(-1)}>Go back</button>
    
    </div>
    
  )
}
   