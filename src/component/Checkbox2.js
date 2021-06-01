import React, { useState } from 'react'

const Checkbox2 = () => {
    
    let datas = [
        {
        id: 1,    
		moduleName: "Configuration",
		activityName: "Item Category",
		isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
        },
        {
        id: 2,  
		moduleName: "Configuration",
		activityName: "Item",
	    isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
        },
        {
        id: 3,  
		moduleName: "Configuration",
		activityName: "Party",
	    isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
        },
        {
        id: 4,  
		moduleName: "Configuration",
		activityName: "Profile",
		isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
        },
        {
        id: 5,  
		moduleName: "Configuration",
		activityName: "Bank Account",
		isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
        },
        {
        id: 6,  
		moduleName: "Purchase",
		activityName: "Purchase",
	    isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
        },
        {
        id: 7,  
		moduleName: "Purchase",
		activityName: "Due Payment",
		isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
        }
    ]
    
    
    const handleCreate = (id) => {
    
        console.log(id)
        const selectedData = datas.find(d => d.id === id)
        if (selectedData.isCreate == true) {
            selectedData.isCreate = false
        } else {
            selectedData.isCreate = true
        }
        console.log(selectedData.isCreate)
    }
    
        
    const handleView = (id) => {
    
        console.log(id)
        const selectedData = datas.find(d => d.id === id)
        if (selectedData.isView == true) {
            selectedData.isView = false
        } else {
            selectedData.isView = true
        }
        console.log(selectedData.isView)
    }

    
    const handleEdit = (id) => {
    
        console.log(id)
        const selectedData = datas.find(d => d.id === id)
        if (selectedData.isEdit == true) {
            selectedData.isEdit = false
        } else {
            selectedData.isEdit = true
        }
        console.log(selectedData.isEdit)
    }

    
    const handleDelete = (id) => {
    
        console.log(id)
        const selectedData = datas.find(d => d.id === id)
        if (selectedData.isDelete == true) {
            selectedData.isDelete = false
        } else {
            selectedData.isDelete = true
        }
        console.log(selectedData.isDelete)
    }

    
    const handleApprove = (id) => {
    
        console.log(id)
        const selectedData = datas.find(d => d.id === id)
        if (selectedData.isApprove == true) {
            selectedData.isApprove = false
        } else {
            selectedData.isApprove = true
        }
        console.log(selectedData.isApprove)
    }
 
    return (
        <div className="container">
            <h1>Task-2</h1>
            
            <table class="table table-bordered table-success mt-3">
                <thead>
                    
                <tr>
                <th scope="col">Module Name</th>
                <th scope="col">Activity Name</th>
                <th scope="col">Create</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                <th scope="col">Approve</th>
                        
                </tr>
                </thead>
                 <tbody>
                        {
                        datas.map(data => <tr>
                        
                                 <td>{data.moduleName}</td>
                                 <td>{data.activityName}</td>
                                 <td> <input type="checkbox" onClick={()=>handleCreate(data.id)} name="" id="" /> </td>
                                 <td> <input type="checkbox" onClick={()=>handleView(data.id)} name="view" id="" /> </td>
                                 <td> <input type="checkbox" onClick={()=>handleEdit(data.id)} name="edit" id="" /> </td>
                                 <td> <input type="checkbox" onClick={()=>handleDelete(data.id)} name="delete" id="" /> </td>
                                 <td> <input type="checkbox" onClick={()=>handleApprove(data.id)} name="approve" id="" /> </td>
                        
                        </tr>
                        )
                        }
              </tbody>
            </table>
            
        </div>
    )
}

export default Checkbox2;
