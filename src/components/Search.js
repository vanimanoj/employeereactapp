import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    var [empid,setEmpid]=useState("")
    const subData=()=>{
        const data={"empid":empid}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">EmployeeID</label>
                    <input onChange={(e)=>{setEmpid(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Search