import React from 'react';
import { Link , useParams} from 'react-router-dom';
import Form from "../form/Index";

export default function Index() {
    let d = useParams();
    let id = d.id;   
    return (
        <React.Fragment>
             <div className="container">
                <h2>Edit User</h2>
                <Link to="/" className="btn btn-primary pull-right">Go Back</Link>
                <div className="clearfix"></div>
                <Form editId={id} />                
            </div>
        </React.Fragment>
    )
}
