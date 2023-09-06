import logo from '../logo.svg'
import {InputBox,Button,Lastlink} from './input'

const Loginpage=()=>{
    return(
        <>
        <img className="mx-auto  w-96px h-96px pt-6" src={logo} alt='Company Logo'/>
        <p className='font-poppins text-2xl  text-center'>Loyalty<strong>dish</strong></p>
        <p className='font-poppins text-2xl text-[#76708F] text-center'>Welcome Back</p>
        <InputBox name="Your email address"/>
        <InputBox name="Your Password"/>
        <Button name="Login"/>
        <div className="flex justify-between mt-2">
        <label className='pl-[24px] text-[#76708F]'>
        <input className="h-[14px] w-[14px] border-[#D6D6DA] "type="checkbox"/> Remember Me
        </label>
        <div >
        <a className="
        drop-shadow-lg
        shadow-green'
        font-poppins
        pr-[24px] 
        underline
        text-[#6B4EEE]" href="www.google.com">Trouble Logging In</a>
        </div>
        </div>
        <Lastlink name='Sign Up' />
        </>
    )
}


export default Loginpage