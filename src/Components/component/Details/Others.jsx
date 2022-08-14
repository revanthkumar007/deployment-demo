import React from 'react'
import {Accordion, AccordionSummary , AccordionDetails, Button} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { action } from '../ReduxSlice/Slice';
function Others() {
 
  const [addSection,setAddSection] = useState([])
  const dispatch = useDispatch();
  const [sectionValues,setSectionValues]= useState({
    heading:"",
    message:""
})

  const handelInp  =(event)=>{
    let inputs = {[event.target.name]:event.target.value}
    setSectionValues({...sectionValues,...inputs})
}

  const handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(action.AddmoreSection({
      headingSection:sectionValues.heading,
      messageSection:sectionValues.message 
    }))
  }

  const handleAdd=()=>{
    const abc=[...addSection,[]]
    setAddSection(abc)
}

  const handelDelete=(i)=>{
      const deleteSection = [...addSection]
      deleteSection.splice(i,1)
      setAddSection(deleteSection)
  }

  return (
    <>
         <form onSubmit={handelSubmit}>
                          <Accordion>
                                        <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <div className='lead p-3'>
                                              Add more Section
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <div className='row'>

                                        {addSection.map((data,i)=>(
                                                <div className='col-12'>
                                                   
                                                    <div className='col-12 bg-primary rounded d-flex justify-content-between mb-2' key={i}>
                                                        <p className='lead text-white ms-3 my-2'>Section {i}</p>
                                                        <div className='my-2' >
                                                              <Button onClick={()=>{handelDelete(i)}}>
                                                                <DeleteIcon className='text-danger'/>
                                                              </Button>
                                                        </div>
                                                    </div>

                                                    <input type="text" name='heading'  class="form-control" placeholder='Heading' onChange={(e)=>handelInp(e)} />

                                                    <textarea className="form-control my-2"  rows={"5"} required placeholder='Any text' name='message' onChange={(e)=>handelInp(e)}  ></textarea>
                                               </div>
                                        ))}
                                      
                                              <div className='col-6 d-flex justify-content-center'>
                                                  <Button onClick={handleAdd}>
                                                    <AddReactionIcon/>
                                                      Add 
                                                  </Button>
                                              </div>
                                           
                                              <div className='col-6 my-2 d-flex justify-content-center'>
                                                  <button className='btn btn-primary' type='submit'>sava</button>
                                              </div>

                                        </div>

                                        </AccordionDetails>
                          </Accordion>
  
        </form>     
</>
  )
}

export default Others