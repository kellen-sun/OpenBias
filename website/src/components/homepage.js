import {Box, useTheme, Typography, IconButton} from '@mui/material'
import {tokens} from "../theme"
//import Typed from 'react-typed'
import './css/homepage.css'
import { styled } from '@mui/material/styles';
import homepageBlur from './images/homepage_blur.png'
import logo from './images/logo.png'

const Homepage = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const Ellipse1 = styled("img")({
        height: `480px`,
        width: `1193px`,
        position: `absolute`,
        left: `600px`,
        top: `238px`,
        scale: `2`,
        zIndex: `-1`,
      });

    return(
        <Box sx={{paddingLeft: "13em", paddingRight:"5em", paddingTop:"19em"}}>
            <p className="flex items-center">
                <span className='subtitle text-4xl font-light'>OpenBias</span>
            </p>
                <h1 className="title2 font-bold max-w-6xl">
                    Uncovering political bias in today's world with {` `}
                    <span className="typed">
                        transparency 
                    </span>
                
                </h1>
            <button className="dash font-semibold text-lg py-4 px-16 my-8 rounded-xl hover:bg-slate-300 hover:text-black" onClick={()=>window.location='/dash'}>Continue</button>
            <Ellipse1 src={homepageBlur} loading='lazy' alt={"homepageBlur"}/>
        </Box>

    )
}

export default Homepage