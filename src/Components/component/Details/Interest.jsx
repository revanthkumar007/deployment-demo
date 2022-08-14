import React from 'react'
import {Accordion, AccordionSummary , AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { action } from '../ReduxSlice/Slice';
import DeleteIcon from '@mui/icons-material/Delete';
function Interest() {
     const dispatch = useDispatch();
     const interst = useSelector((state) => state.interst)
    const [IntrestStr,setIntrestStr] = useState('')
    const handleSumit = (event)=>{
        event.preventDefault()
          dispatch(action.Intrest({
            addMoreInterst:IntrestStr
          }))
          setIntrestStr('')
    } 
    const handleDelete=(id)=>{
      dispatch(action.IntrestRemove({id:id}))
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
                                            Area of Interest
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <div className='row'>
                                        
                                            <div className='col-6'>
                                                    <div className="form-group">
                                                 <input type="text" class="form-control" value={IntrestStr} onChange={(e)=>{setIntrestStr(e.target.value)}} />
                                                    </div>
                                            </div>
                                        
                                           
                                              <div className='col-6'>
                                                  <button className='btn btn-primary' type='submit'>sava</button>

                                                  <div className='mt-4'>
                                                      {interst.map((item,i)=>(
                                                        <div className='col-12 '>
                                                            <div key={i} className='d-flex justify-content-between'>
                                                              <p className='lead'>{item.addMoreInterst}</p>
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

export default Interest