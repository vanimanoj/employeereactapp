import React, { useState } from 'react'
import Navbar from './Navbar'

const Empoyeeregister = () => {
    var [empid,setId]=useState("")
    var [empName,setName]=useState("")
    var [designation,setDesignation]=useState("")
    var [salary,setSalary]=useState("")
    var [CompanyName,setCompanyName]=useState("")
    var [dob,setDod]=useState("")
    var [email,setEmail]=useState("")
    
    const subData=()=>{
        const data={"empid":empid,"empname":empName,"designation":designation,"salary":salary,"CompanyName":CompanyName,"dob":dob,"email":email}
        console.log(data)
    }
    const cleardata=()=>{
        const data={"empid":"","empname":"","designation":"","salary":"","CompanyName":"","dob":"","email":""}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">EmployeeID</label>
                   <input onChange={(e)=>{setId(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">EmployeeName</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Designation</label>
                    <input onChange={(e)=>{setDesignation(e.target.value)}} type="text" className="form-control"/>
                
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Salary</label>
                    <input onChange={(e)=>{setSalary(e.target.value)}} type="text" className="form-control"/>
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CompanyName</label>
                    <input onChange={(e)=>{CompanyName(e.target.value)}} type="text" className="form-control"/>
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">DOB</label>
                <input onChange={(e)=>{setDod(e.target.value)}} type="text" className="form-control"/>
                
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Email</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className="form-control"/>
    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={cleardata}  className="btn btn-danger">CLEAR</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Empoyeeregister