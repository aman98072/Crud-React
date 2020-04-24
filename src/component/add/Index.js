import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Form from '../form/Index';

export default function Index() {
    return (
        <React.Fragment>
            <div className="container">
                <h2>Add user</h2>
                <Link to="/" className="btn btn-primary pull-right">Go Back</Link>
                <div className="clearfix"></div>
                <Form />                
            </div>
        </React.Fragment>
    )
}
