import React from 'react'
import {Accordion, AccordionSummary , AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { action } from '../ReduxSlice/Slice';
import DeleteIcon from '@mui/icons-material/Delete';
function Skills() {

    const dispatch = useDispatch();

    const skills = useSelector((state) => state.skills)
    
    const [skillsStr,setskillsStr] = useState('')

    const handleSumit = (event)=>{

        event.preventDefault()

          dispatch(action.Skills({
               PersonSkills:skillsStr
          }))

          console.log(skills); 
          setskillsStr('');
  
    }
    
    const handleDelete=(id)=>{
        dispatch(action.SkillsRemove({id:id}))
    }

   
     

  return (
    <>
          <form onSubmit={handleSumit}>
                          <Accordion>
                                        <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <div className='lead p-3'>
                                          Skills
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <div className='row'>
                                        
                                            <div className='col-6'>
                                                    <div className="form-group">
                                                 <input type="text" value={skillsStr} class="form-control" onChange={(e)=>{setskillsStr(e.target.value)}} />
                                                    </div>
                                            </div>
                                        
                                           
                                              <div className='col-6'>
                                                  <button className='btn btn-primary d-block' type='submit'>sava</button>

                                                  <div className='mt-4'>
                                                      {skills.map((item,i)=>(
                                                        <div className='col-12 '>
                                                            <div key={i} className='d-flex justify-content-between'>
                                                              <p className='lead'>{item.PersonSkills}</p>
                                                              <p onClick={()=>{handleDelete(item.id)}}><DeleteIcon/></p>
                                                            </div>
                                                        </div>
                                                      ))}
                                                  </div>
                                                 

                                              </div>
                                        
                                        </div>

                                        </AccordionDetails>
                          </Accordion>
  
        </form>     
    </>
  )
}

export default Skills