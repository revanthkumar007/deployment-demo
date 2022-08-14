import React from 'react'
import { useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import resumeImg from '../Images/undraw_resume_folder_re_e0bi.svg'
function Home() {
    const navigation = useNavigate();
    const matches = useMediaQuery('(max-width:769px)');
  return (
    <>
         <div className='container-fluid bg-light'>
            <div className='container'>

            <div className='home-container'>

                <div className='row'>

                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <h1 className='display-1'>Resume Generator Online</h1>
                    <p className='lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores obcaecati, voluptates quasi ea nostrum cum, nulla nisi velit veniam beatae quam distinctio magni pariatur molestias! Consequatur nesciunt tenetur officia.</p>

                    <div>
                    <button className='btn btn-primary my-3' onClick={()=>{navigation('/details')}}>create resume</button>
                   </div>

                </div>

                {!matches && 
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                            <img src={resumeImg} alt="..." className='img-fluid' width={500} height={400}/>
                        </div>
                }   
               

                </div>

            </div>

            </div>
        </div>
    </>
  )
}

export default Home