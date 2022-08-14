import React from 'react'
import {Accordion, AccordionSummary , AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { action } from '../ReduxSlice/Slice';
function Certification() {
    const [heading,headingCertification] = useState('')
    const [certification,setCertification] = useState('')

    const dispatch = useDispatch();

    const certificationCourse = {
        heading:heading,
        certification:certification
    } 

    const handleSubmit=(e)=>{
      e.preventDefault()
        dispatch(action.CertificationAdd({
          heading:certificationCourse.heading,
          CertificationWhere:certificationCourse.certification
        }))
        setCertification('')
        headingCertification('')
    }

  return (
    <>
         <form onSubmit={handleSubmit} >
                          <Accordion>
                                        <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <div className='lead p-3'>
                                             Certification
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <div className='row'>

                                        <div className='col-12 my-4'>
                                            <input type="text" className='form-control' placeholder='Heading of certification' value={heading} onChange={(e)=>{headingCertification(e.target.value)}}/>
                                        </div>
                                        
                                        <div className='col-12'>
                                                <textarea class="form-control" placeholder='Course of certification' rows={"5"} required  onChange={(e)=>{setCertification(e.target.value)}} value={certification}></textarea>
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

export default Certification