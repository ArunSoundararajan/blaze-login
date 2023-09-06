import logo from '../logo.svg'
import {InputBox,Button,Lastlink} from './input'

const Signup=()=>{
    return(
<>
        <img className="mx-auto  w-96px h-96px pt-6" src={logo} alt='Company Logo'/>
        <p className='font-poppins text-2xl  text-center'>Loyalty<strong>dish</strong></p>
        <p className='font-poppins text-2xl text-[#76708F] text-center'>Welcome Back</p>
        <InputBox name="Your email address"/>
        <InputBox name="Your Password"/>
        <InputBox name="Full Name"/>
        <Button name="Login"/>
        
        <Lastlink name="Login"/>
        </>

    )
}


export default Signup