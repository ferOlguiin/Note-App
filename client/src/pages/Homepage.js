import { useAuth0 } from "@auth0/auth0-react";
import {LoginButton} from '../components/LoginButton';
import { Profile } from "../components/Profile";
import {VscGithubInverted} from 'react-icons/vsc';
import {IoLogoLinkedin} from 'react-icons/io5';


export const Homepage = () => {

  const {user} = useAuth0();

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column text-white">
      <h1 className="fw-bold display-4 text-center">Note-App</h1>
      <p className="fs-5 text-center">Para guardar de manera rápida lo que encuentres útil al momento de navegar</p>
      
      {
        user ? '' : <LoginButton/>
      }
      {
        user ? <div>
          <Profile/>
        </div> : ''
      }

      <div className="fixed-bottom w-100 d-flex justify-content-end align-items-center">
        <a href='https://github.com/ferOlguiin?tab=repositories' target="_blank" rel="noreferrer"><VscGithubInverted className="text-white fs-3 mb-2 me-2"/></a>
        <a href='https://www.linkedin.com/in/fernando-olguin-5a63a9236/' target="_blank" rel="noreferrer"><IoLogoLinkedin className="text-white fs-2 mb-2 me-3"/></a>
      </div>

    </div>
  )
}

