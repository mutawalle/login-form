import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router'

export default function Home() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  useEffect( () => {
    console.log(location.state == null);
    if(location.state !== null){
      setEmail(location.state.email)
    }
  }, [])

  return (
    <>
      <div>
        {email === "" ? 
          <>
            <h1>Silakan Login</h1><br/>
            <a href='/login'>Login</a>  
          </>
          :
          <>
            <h1>Selamat Datang</h1><br/><p>{email}</p>
          </>
        }
      </div>
      <style jsx>{`
        div {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-family: 'Fredoka One', cursive;
        }
        h1 {
          color: #041b37;
        }
      `}</style>
    </>
  )
}
