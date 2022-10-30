import { useRef } from "react"
import { useContext } from "react"
import { Link , useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

const userLogin = async (email, pass) => {
  let res = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "city"
    })
  })

  return await res.json()

}


function Login() {

  const nevigate = useNavigate()

  const {isAuth , token , loginUser , logoutUser} = useContext(AppContext)
 

  const Email = useRef(null)
  const Pass = useRef(null)


  const SubmitData = (e) => {

    e.preventDefault()
    let email = Email.current.value
    let pass = Pass.current.value

    if (email != "" && pass != "") {
      let x = userLogin(email, pass)
      x.then((d) => {
        console.log(d.token)
        loginUser(d.token)
        nevigate("/dashboard")
      }).catch((err) => {
        console.log(err, "userLogin")
      })
    }

  }

  return (
    
<div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" ref={Email} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              ref={Pass}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" onClick={SubmitData} />
        </div>
      </form>

      <div>
        <Link className="message" to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
