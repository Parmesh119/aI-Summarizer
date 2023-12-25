import { NavLink } from "react-router-dom"
function Register() {
  return (
    <>
        <span
        style={{
          width: "30rem",
          height: "22rem",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
          color: "black",
          marginTop: "1rem",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            fontFamily: "Open Sans",
            fontSize: "2rem",
            fontWeight: "bold",
            justifyContent: "start",
            alignItems: "center",
            display:"flex",
            flexDirection:"column"
          }}
        >
          Register to get start
        </h2>
        <h2 style={{
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: "bold",
            justifyContent: "start",
            alignItems: "start",
            display:"flex",
            flexDirection:"column"
        }}>First Name: </h2>
        <input type="text" placeholder="First Name" id="firstname" required style={{
            appearance:"none",
            borderWidth:"1px",
            width:"100%",
            paddingTop:"0.75rem",
            paddingBottom:"0.75rem",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            color:"gray",
            lineHeight:"1.25",
            borderRadius:"5px",
        }} />
        <h2 style={{
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: "bold",
            justifyContent: "start",
            alignItems: "start",
            display:"flex",
            flexDirection:"column"
        }}>Last Name: </h2>
        <input type="text" placeholder="Last Name" id="lastname" required style={{
            appearance:"none",
            borderWidth:"1px",
            width:"100%",
            paddingTop:"0.75rem",
            paddingBottom:"0.75rem",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            color:"gray",
            lineHeight:"1.25",
            borderRadius:"5px",
        }} />
        <h2 style={{
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: "bold",
            justifyContent: "start",
            alignItems: "start",
            display:"flex",
            flexDirection:"column"
        }}>Username: </h2>
        <input type="text" placeholder="Username" id="user" required style={{
            appearance:"none",
            borderWidth:"1px",
            width:"100%",
            paddingTop:"0.75rem",
            paddingBottom:"0.75rem",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            color:"gray",
            lineHeight:"1.25",
            borderRadius:"5px",
        }} />
        <h2
          style={{
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: "bold",
            justifyContent: "start",
            alignItems: "start",
            display:"flex",
            flexDirection:"column"
          }}
        >
          Email:
        </h2>
        <input type="email" id="email" placeholder="Enter your email" required style={{
            appearance:"none",
            borderWidth:"1px",
            width:"100%",
            paddingTop:"0.75rem",
            paddingBottom:"0.75rem",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            color:"gray",
            lineHeight:"1.25",
            borderRadius:"5px",
        }} />
        <h2
          style={{
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: "bold",
            justifyContent: "start",
            alignItems: "start",
            display:"flex",
            flexDirection:"column",
            marginTop:"1rem"
          }}
        >
          Password:
        </h2>
        <input type="password" id="password" placeholder="Password" required style={{
            appearance:"none",
            borderWidth:"1px",
            width:"100%",
            paddingTop:"0.75rem",
            paddingBottom:"0.75rem",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            color:"gray",
            lineHeight:"1.25",
            borderRadius:"5px",
        }}/>
        <h2
          style={{
            fontFamily: "Open Sans",
            fontSize: "18px",
            fontWeight: "bold",
            justifyContent: "start",
            alignItems: "start",
            display:"flex",
            flexDirection:"column",
            marginTop:"1rem"
          }}
        >
          Confirm Password:
        </h2>
        <input type="password" id="confirmPassword" placeholder="Confirm Password" required style={{
            appearance:"none",
            borderWidth:"1px",
            width:"100%",
            paddingTop:"0.75rem",
            paddingBottom:"0.75rem",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            color:"gray",
            lineHeight:"1.25",
            borderRadius:"5px",
        }}/>
        <button type="submit" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent: "start",
            alignItems: "center",
            backgroundColor:"black",
            color:"white",
            borderRadius:"10px",
            paddingTop:"0.5rem",
            paddingBottom:"0.5rem",
            fontWeight:"bold",
            fontSize:"larger",
            marginTop:"1rem",
        }}>
          SignUp
        </button>
        <h2 style={{
            display:"flex",
            flexDirection:"column",
            justifyContent: "start",
            alignItems: "center",
            fontWeight:"bold",
            marginTop:"0.25rem"
        }}>
            OR
        </h2>
        <NavLink to="/" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent: "start",
            alignItems: "center",
            backgroundColor:"black",
            color:"white",
            borderRadius:"10px",
            paddingTop:"0.5rem",
            paddingBottom:"0.5rem",
            fontWeight:"bold",
            fontSize:"larger",
            marginTop:"1rem"
        }}><button type="submit">
          Back to home page
        </button></NavLink>
      </span>
    </>
  )
}

export default Register
