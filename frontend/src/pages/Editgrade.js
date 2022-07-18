import {Link } from 'react-router-dom';

export default function Editgrade() {

  return (
    <div>
    <h3>Grade has successfully been Updated!</h3>
    <Link to="../instructordashboard"className="btn btn-primary btnsubmit">Go back</Link>
    </div>
  )
}
