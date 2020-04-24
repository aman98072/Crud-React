import React, {useState, useEffect} from 'react';

export default function Index(props) {
    const editId = props.editId;
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState();
    const [succ, setSuccess] = useState(false);
    const [btnName, setBtnName] = useState('Submit');

    useEffect( () => {
        // get data from localstorage   
        if (editId) {
            let editData = JSON.parse(localStorage.getItem('data_'+editId));
            setFirstName(editData.fname);
            setLastName(editData.lname);
            setEmail(editData.email);
            setBtnName('Update');
        } else {

        }
    }, []);    

    const submitForm = (e) => {          
        e.preventDefault();        
        
        setMsg('');        
        if (fname == '') {
            setMsg('First Name cannot empty');
        } else if (lname == '') {
            setMsg('Last Name cannot empty');
        } else if (email == '') {
            setMsg('Email cannot empty');
        } 

        if (fname != '' && lname != '' && email != '') {
            setSuccess(true);            
            let data = {fname : fname, lname : lname, email : email};
                  
            
            if (editId) {
                // update data into local storage                
                setMsg('Successfully Data Updated.'); 
                data.sno = editId;
                localStorage.setItem('data_'+editId,  JSON.stringify(data));
            } else {
                setFirstName('');
                setLastName('');
                setEmail(''); 
                setMsg('Successfully Data Saved.'); 
            
                 // save data into local Storage
                let isData = localStorage.getItem('isData');
                if (isData == null) {
                    data.sno = 1;
                    localStorage.setItem('data_1', JSON.stringify(data));
                    localStorage.setItem('isData', 1);
                } else {
                    let totalData = parseInt(isData) +  parseInt(1);
                    localStorage.setItem('isData', totalData);
                    data.sno = totalData;
                    localStorage.setItem('data_'+totalData, JSON.stringify(data));
                }
            }
        }
    }

    return (
        <React.Fragment>
            <form className="form-horizontal mt-5" onSubmit={submitForm}>
                { msg ? <div className= {succ ? 'alert alert-success text-bold' : 'alert alert-danger text-bold' }><strong>{msg}</strong></div>  : '' }
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="firstname">First Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Enter First Name" value={fname} onChange={e => setFirstName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Last Name:</label>
                    <div className="col-sm-10">          
                        <input type="text" className="form-control" placeholder="Enter Last Name" value={lname} onChange={e => setLastName(e.target.value)} />
                    </div>
                </div> 
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Email Id:</label>
                    <div className="col-sm-10">          
                        <input type="email" className="form-control" placeholder="Enter Email Id" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>                
                <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">{btnName}</button>
                </div>
                </div>
            </form>
        </React.Fragment>        
    )
}
