import React from 'react'
import {Accordion, AccordionSummary , AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { action } from '../ReduxSlice/Slice';
function Educational() {
 
  const dispatch = useDispatch();
 
  const [institute,setInstitute] = useState('')
  const [study,setStudy] = useState('')
  const [grade,setGrade] = useState('')
  const [year,setYear] = useState('')

  const edu ={
    institute:institute,
    study:study,
    grade:grade,
    year:year
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
      dispatch(action.EducationAdd({
        institute:edu.institute,
       study:edu.study,
        grade:edu.grade,
        year:edu.year
      }))
        setInstitute('')
        setStudy('')
        setYear('')
        setGrade('')
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
                                           Educational Qualification
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <div className='row'>
                                        
                                        <div className='col-12'>
                                                <label className='lead my-2'>Heading of Institute</label>
                                                <input type="text" value={institute} className='form-control' onChange={(e)=>{setInstitute(e.target.value)}}  />
                                         </div>
                                        <div className='col-12'>
                                                <label className='lead my-2'>Degree or other Schools</label>
                                                <input type="text" value={study} className='form-control'  onChange={(e)=>{setStudy(e.target.value)}}/>
                                         </div>
                                        <div className='col-12'>
                                                <label className='lead my-2'>Grade</label>
                                                <input type="text" value={grade} className='form-control'  onChange={(e)=>{setGrade(e.target.value)}}/>
                                         </div>
                                        <div className='col-12'>
                                                <label className='lead my-2'>Start Years and End Year </label>
                                                <input type="text" value={year} className='form-control'  onChange={(e)=>{setYear(e.target.value)}}/>
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

export default Educational