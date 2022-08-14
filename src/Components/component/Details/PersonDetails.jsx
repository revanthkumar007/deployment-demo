import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import inputs from './Information';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useDispatch} from 'react-redux'
import { action } from '../ReduxSlice/Slice';
function PersonDetails() {

    const dispatch = useDispatch();
    const [Gender,setSelect] = useState("")

    const selectOpt =(e)=>{
        setSelect(e.target.value)
      }

    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        birthday: "",
        MotherName: "",
        Adders:"",
        City:"",
      });

      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        
         if(values)
         {
          dispatch(action.personAdd({
            firstName:values.FirstName,
            lastName:values.LastName,
            email:values.email,
            dateOfBirth:values.birthday,
            motherName:values.MotherName,
            adders:values.Adders,
            city:values.City,
            gender:Gender,
            check:true
       }))
           console.log(values);
         }
           
      
      };
    


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
                                      
                                            Personal Details
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <div className='row'>
                                        

                                        
                                            {inputs.map((input) => (

                                              <div className='col-6'>
                                                <Form.Control 
                                                key={input.id}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                                className={'my-4'}
                                                />
                                              </div>

                                        ))}

                                              <div className='col-6 my-4'>
                                                  <select class="form-control form-control" onChange={selectOpt}>
                                                          <option value={'Gender'}>Gender</option>
                                                          <option value={'Male'}>Male</option>
                                                          <option value={'Female'}>Female</option>
                                                          <option value={'Trans Gender'}>Trans Gender</option>
                                                </select>
                                              </div>

                                              <div className='col-6'>
                                                  <button className='btn btn-primary' type='submit'>sava</button>
                                              </div>
                                              
                                        </div>

                                        </AccordionDetails>
                          </Accordion>
  
</form>     
    </>
  )
}


export default PersonDetails