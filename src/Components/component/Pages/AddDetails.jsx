import React ,{useState,useEffect} from 'react'
import PersonDetails from '../Details/PersonDetails'
import Objective from '../Details/Objective';
import Skills from '../Details/Skills';
import Interest from '../Details/Interest';
import Educational from '../Details/Educational';
import Certification from '../Details/Certification';
import Achievements from '../Details/Achievements';
import Others from '../Details/Others';
import detailsImg from '../Images/undraw_profile_details_re_ch9r.svg'
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useSelector} from 'react-redux'
import preloader from '../Images/perloadercircle.gif'
function AddDetails() {
  const [show, setShow] = useState(false);
  const Person = useSelector((state)=> state.PersonDetaile)
    const navigation = useNavigate();
    const matches = useMediaQuery('(max-width:769px)');
    const handleShow=()=>{
            if(Person.check)
            {
              navigation('/show')
            }
            else{
              alert('please fill the personal infromation and click save button')
            }
          }
          
          useEffect(
            () => {
              let timer1 = setTimeout(() => setShow(true), 5 * 1000);
              return () => {
                clearTimeout(timer1);
              };
            },[]);
          
  return (
    <>
    {show ?  <div className='container-fluid '>
                        <div className='row  '>

                              
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12  p-0 m-0 '>
                                    <div className='details-container '>
                                      
                                        <Button className='p-3' onClick={()=>{navigation('/')}}> 
                                            <FastRewindIcon/>Back to home
                                        </Button>
                                        
                                          <div className='container'>

                                          {matches && 
                                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 '>
                                                  <h1 className='display-4 text-center mb-3'>
                                                        Create your professional CV online with CV maker
                                                  </h1>
                                           </div>
                                          }
                                          

                                              <PersonDetails/>
                                              <hr />
                                              <Objective/>
                                              <hr />
                                              <Skills/>
                                              <hr />
                                              <Interest/>
                                              <hr />
                                              <Educational/>
                                              <hr />
                                              <Certification/>
                                              <hr />
                                              <Achievements/>
                                              <hr />
                                              <Others/>
                                            
                                              <div className='my-4'>
                                                  <button className='btn btn-primary' onClick={()=>{handleShow()}}>show the details</button>
                                              </div>

                                          </div>
                                    </div>
                                </div>
                                
                               {!matches && 
                                   <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 bg-light  '>
                                          <div className='col-12 cv-container'>
                                                      <div className='display-4 text-center'>
                                                      Create your professional CV online with CV maker
                                                      </div>
                                                      <img src={detailsImg} alt="..." className='img-fluid' width={400} height={300} />
                                          </div>
                                 </div>
                                }

                        </div>
    </div>  : 
     <>
        <div className='per-container bg-light'>
            <div>
            <img src={preloader} alt="..." width={100} height={200} className={'img-fluid'} />
            </div>
        </div>
   </>
     }
     
    </>
  )
}

export default AddDetails




  