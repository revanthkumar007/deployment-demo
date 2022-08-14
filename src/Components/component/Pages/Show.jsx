import React from 'react'
import {useSelector} from 'react-redux'
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import EmailIcon from '@mui/icons-material/Email';
import WcIcon from '@mui/icons-material/Wc';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
function Show() {

    const navigation = useNavigate();
  const achievement = useSelector((state)=>state.Achievements)
  const Certification = useSelector((state)=>state.Certification)
  const Education = useSelector((state) => state.Education)
  const interst = useSelector((state) => state.interst)
  const Objective = useSelector((state)=> state.Objective)
  const section = useSelector((state) => state.AddmoreSection)
  const Person = useSelector((state)=> state.PersonDetaile)
  const skills = useSelector((state) => state.skills)

  return (
    <>

           
         <div className='container-fluid  '>
           <div className='container'>

           <div className='d-flex justify-content-between'>
                   <div>
                   <Button className='my-3' onClick={()=>{navigation('/details')}}> 
                        <FastRewindIcon/>Back to resume conventer
                    </Button>
                   </div>

                    <div>
                    <Button className='my-3' onClick={()=>{navigation('/pdf')}}> 
                      <PictureAsPdfIcon/>PDF
                    </Button>
                    </div>
            </div>

           </div>

          <div className='text-center m-3'>
                <h1 className='display-4'>Check the details</h1>
            </div>


        <div className='container show-container'>
            <div className='row'>

                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 p-4 person-col'>
                  
                    <h3 className='display-4 '>{Person.firstName.toUpperCase()}{Person.lastName.toUpperCase()}</h3>
                    <p className='lead mx-2'>
                        
                            <PregnantWomanIcon  sx={{ fontSize: 25 }} color="action" className='m-2'/>
                            {Person.dateOfBirth}
                    </p>
                    <p className='lead mx-2'>
                        
                            <EmailIcon  sx={{ fontSize: 25 }}color="action" className='m-2'/>
                            {Person.email}
                    </p>
                    <p className='lead mx-2'>
                        
                            <WcIcon  sx={{ fontSize: 25 }} color="action" className='m-2'/>
                            {Person.gender}
                    </p>

                </div>

                <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 p-4 bg-light'>
                    <h1 className='objective-heading'>CAREER OBJECTIVE</h1>
                    <p className='lead'>
                          {Objective.CareerObjective}
                    </p>
                </div>

                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12  bg-light p-4'>
                  <div className='py-3'>
                    <h1 className='Skills-heading '>SKILLS</h1>
                    {
                      skills.map((item,i)=>(
                        <div key={i}>
                            <p className='lead'> <ControlPointIcon  sx={{ fontSize: 25 }} color="action" className='me-2'/>{item.PersonSkills}</p>
                        </div>
                      ))
                    }
                  </div>
                  
                  <div className='py-3'>
                    <h1 className='Skills-heading '>AREA OF INTREST</h1>
                    {
                      interst.map((item,i)=>(
                        <div key={i}>
                            <p className='lead'> <ControlPointIcon  sx={{ fontSize: 25 }} color="action" className='me-2'/>{item.addMoreInterst}</p>
                        </div>
                      ))
                    }
                  </div>

                  <div className='py-3'>
                      <h1 className='Skills-heading '>CERTIFICATIONS</h1>
                      {
                        Certification.map((item,i)=>(
                          <div key={i}>
                              <h1 className='lead'><ControlPointIcon sx={{ fontSize: 25 }} color="action"       className='me-2'/>{item.heading.toUpperCase()}</h1>
                              <p className='lead mx-5'>{item.CertificationWhere}</p>
                          </div>
                        ))
                      }
                  </div>

                </div>

                <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12  person-col p-4'>

                  <div>
                      <h1 className='education-heading'>EDUCATIONAL QUALIFICATION</h1>
                      {
                        Education.map((item,i)=>(
                          <div key={i}>
                            <h1 className='lead'><ControlPointIcon sx={{ fontSize: 25 }} color="action" className='me-2'/>{item.institute.toUpperCase()}</h1>
                            <p className='lead mx-5'>{item.study}</p>
                            <p className='lead mx-5'>{item.grade}</p>
                            <p className='lead mx-5'>{item.year}</p>
                          </div>
                        ))
                      }
                  </div>

                  <div>
                     <h1 className='education-heading pt-4'>ACHIEVEMENTS</h1>
                      {
                        achievement.map((item,i)=>(
                          <div key={i}>
                             <p className='lead'>
                               <ControlPointIcon sx={{ fontSize: 25 }} color="action" className='me-2'/>
                              {item.achieve}
                            </p>
                          </div>
                        ))
                      }
                  </div>

                  <div>
                      {
                        section.map((item,i)=>(
                          <div key={i}>
                             <h1 className='education-heading pt-4'>{item.headingSection.toUpperCase()}</h1>
                             <p className='lead'>{item.messageSection}</p>
                          </div>
                        ))
                      }
                  </div>

                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Show