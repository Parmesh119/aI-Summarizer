import Demo from './Demo.jsx'
import { logo } from "../assets";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <header style={{
        width:"100",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
      }}>
      <nav style={{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100",
        marginBottom:"10",
        paddingTop:"3",
        marginTop: "5px"
      }}>
        <img src={logo} alt='@I Summarizer'  style={{
          width:"28",
          objectFit:"contain",
          marginRight:"44rem",
          left:"0"
        }} className="imgW" />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Parmesh119/aI-Summarizer", "_blank")
          }
          className='black_btn '
          style={{
            marginTop:"0.2rem",
            right:"0"
          }}
        >
          GitHub
        </button>
        
      </nav>
      <h1 className="head_text">
        Summarize your text with <br className="max-md:hidden" /><span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with @I Summarizer, an Open-Source article summarizer that convert the lengthy article into the understandable format.
      </h2>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Demo />} />
        </Routes>
      </BrowserRouter>
      </header>
    </>
  );
};

export default Hero;
