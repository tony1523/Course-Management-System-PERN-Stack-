import {Link } from 'react-router-dom';

export default function Unregister() {

  return (
    <div>
    <h3>Student has been successfully Unregistered!</h3>
    <Link to="../registeredstudents"className="btn btn-primary btnsubmit">Go back</Link>
    </div>
  )
}
