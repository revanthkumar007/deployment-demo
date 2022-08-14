import React from 'react'
import {useSelector} from 'react-redux'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';
function PdfFile() {
    const achievement = useSelector((state)=>state.Achievements)
    const Certification = useSelector((state)=>state.Certification)
    const Education = useSelector((state) => state.Education)
    const interst = useSelector((state) => state.interst)
    const Objective = useSelector((state)=> state.Objective)
    const section = useSelector((state) => state.AddmoreSection)
    const Person = useSelector((state)=> state.PersonDetaile)
    const skills = useSelector((state) => state.skills)
    const PdfSaveComponent = useRef(null);

    const handleSaveComponent=(e)=>{
        savePDF(PdfSaveComponent.current,{paperSize:"A4",fileName:'resume.pdf'})
     }
   
  return (
    <>
        <div className='container-fluid'>
            <div className='container'>

            <div className='m-4'>
                            <button className='btn btn-primary' onClick={handleSaveComponent}>Export with con</button>
                 </div>


                <PDFExport>
                <div ref={PdfSaveComponent}>

                <div className='pdf-page size-a4'>
                    <div className='row'>

                        <div className='col-6 header-fonts bgCol'>
                            <h4 className='text-left'>{Person.firstName.toUpperCase()}{Person.lastName.toUpperCase()}</h4>
                            <div className='text-left other-fonts'>
                                <p>{Person.dateOfBirth}</p>
                                <p>{Person.email}</p>
                                <p>{Person.gender}</p>
                            </div>
                        </div>

                        <div className='col-6 header-fonts bg-light'>
                            <h4 className='text-left'>CAREER OBJECTIVE</h4>
                            <div className='text-left other-fonts'>
                                <p>{Objective.CareerObjective}</p>
                            </div>
                        </div>

                            {/* div */}
                        <div className='col-6 header-fonts bg-light'>
                                    <h4 className='text-left'>SKILLS</h4>
                                    <div className='text-left other-fonts'>
                                      {skills.map((item,i)=>(
                                        <div key={i}>
                                            <p>{item.PersonSkills}</p>
                                        </div>
                                      ))}
                                    </div>


                                    <h4 className='text-left py-3'>AREA OF INTREST</h4>
                                    <div className='text-left other-fonts'>
                                        {interst.map((item,i)=>(
                                            <div key={i}>
                                                <p>{item.addMoreInterst}</p>
                                            </div>
                                        ))}
                                    </div>

                                     {/* CERTIFICATIONS */}
                                        <h4 className='text-left'>CERTIFICATIONS</h4>
                                        <div className='text-left other-fonts'>
                                            {Certification.map((item,i)=>(
                                                <div key={i}>
                                                    <h6>{item.heading.toUpperCase()}</h6>
                                                    <p>{item.CertificationWhere}</p>
                                                </div>
                                            ))}
                                        </div>
                                     {/* CERTIFICATIONS */}
                        </div>
                            {/* div */}

                        {/* div two */}

                        <div className='col-6 header-fonts bgCol'>

                       

                        {/* EDUCATIONAL QUALIFICATION */}
                             <h4 className='text-left'>EDUCATIONAL QUALIFICATION</h4>
                                <div  className='text-left other-fonts'>
                                    {Education.map((item,i)=>(
                                        <div key={i}>
                                            <h6>{item.institute.toUpperCase()}</h6>
                                            <p>{item.study}</p>
                                            <p>{item.grade}</p>
                                            <p>{item.year}</p>
                                        </div>
                                    ))}
                                </div>
                        {/* EDUCATIONAL QUALIFICATION */}

                        {/* ACHIEVEMENTS */}
                        <h4 className='text-left py-3'>ACHIEVEMENTS</h4>
                                <div  className='text-left other-fonts'>
                                    {achievement.map((item,i)=>(
                                        <div key={i}>
                                            <p>{item.achieve}</p>
                                        </div>
                                    ))}
                                </div>
                        {/* ACHIEVEMENTS */}

                        {/* Othersections */}


                        {
                            section.map((item,i)=>(
                                <div key={i}>
                                        <h4 className='text-left'>{item.headingSection.toUpperCase()}</h4>
                                        <div className='text-left other-fonts'>
                                            <p>{item.messageSection}</p>
                                        </div>
                                </div>
                            ))
                        }
                    

                        {/* Othersections */}

                        </div>

                        {/* div two */}

                    </div>
                </div>
                </div>
                </PDFExport>
            </div>
        </div>
    </>
  )
}

export default PdfFile