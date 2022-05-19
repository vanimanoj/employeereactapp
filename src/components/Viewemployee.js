import React from 'react'
import Navbar from './Navbar'

const Viewemployee = () => {
  var emplist=[{"empid":1,
  "empname":"sumith",
  "empdesig":"associate"
},
{"empid":2,
"empname":"sam",
"empdesig":"associate"
},
{"empid":3,
"empname":"vani",
"empdesig":"associate"
},
{"empid":4,
"empname":"ammu",
"empdesig":"associate"
}]
  return (
    <div>
        <Navbar/>
        <div className="container">
        <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table table-primary table-striped">
        <thead>
    <tr>
      
      <th scope="col">empid</th>
      <th scope="col">empname</th>
      <th scope="col">designation</th>
    </tr>
  </thead>
  <tbody>
            {emplist.map((value,key)=>{
return <tr>
      
      <td>{value.empid}</td>
      <td>{value.empname}</td>
      <td>{value.empdesig}</td>
    </tr>
            })}
             </tbody>
</table>

        </div>
        </div>
        </div>
        </div>
    
    
  )
}

export default Viewemployee