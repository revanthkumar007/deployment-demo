import React from 'react'
import {Accordion, AccordionSummary , AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { action } from '../ReduxSlice/Slice';
function Achievements() {
  const dispatch = useDispatch();
  const [achieve,setAchieve] = useState('')
  const handleSubmit =(e)=>{
    e.preventDefault()
      dispatch(action.Addachievements({
           achieve:achieve
      }))
      setAchieve('')
  }
  return (
    <>
         <form onSubmit={handleSubmit}>
                          <Accordion>
                                        <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <div className='lead p-3'>
                                             Achievements
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <div className='row'>
                                        
                                        <div className='col-12'>
                                                <textarea class="form-control" value={achieve} onChange={(e)=>{setAchieve(e.target.value)}} rows={"5"} required></textarea>
                                         </div>
                                      
                                           
                                              <div className='col-6 my-2'>
                                                  <button className='btn btn-primary' type='submit'>sava</button>
                                              </div>

                                        </div>

                                        </AccordionDetails>
                          </Accordion>
  
        </form>     
</>
  )
}

export default Achievements