import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Index() {   
    
    const [data, setData] = useState([]);
    const dataList = [];

    useEffect(() => {        
        let key = Object.keys(localStorage);
        key.forEach( (val, index) => {
            if (val.indexOf('data') != -1) {                
                dataList.push(JSON.parse(localStorage.getItem(val)));
            }
        });     
        
        setData(dataList);
    },[]);

    const deleteRecord = (id) => {
        localStorage.removeItem("data_"+id);
        let totalData = localStorage.getItem("isData");
        localStorage.setItem("isData", parseInt(totalData) - parseInt(1));        
    }
    
    return (
        <React.Fragment>
            <div className="container">
                <h2>Crud Application</h2>
                <Link to="/add" className="btn btn-primary pull-right">Add User</Link>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map( (val, index) => {                            
                            return (
                                <tr key={index}>
                                    <td>{val.sno}</td>
                                    <td>{val.fname}</td>
                                    <td>{val.lname}</td>
                                    <td>{val.email}</td>
                                    <td><Link to={`/edit/${val.sno}`} className="btn btn-primary" key={index}>Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={() => deleteRecord(val.sno)} key={index}>Delete</button></td>
                                </tr>           
                            );
                        })
                    }                        
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
