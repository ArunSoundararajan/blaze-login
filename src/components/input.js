
export const InputBox =(props)=>{
    return(
        <input type="text" 
        id="first_name" 
        className="bg-[#EBE9F9]
        pl-4
        border-gray-300
        text-gray-900 
        text-sm 
        hover:border-2 border-blue-500
        rounded-sm 
        block w-[404px] 
        h-[68px]
        mx-auto p-2.5 
       "
        placeholder={props.name}
        required/>
    )
}


export const Button=(props)=>{
    return(
        <button className="bg-[#785EF0] 
        hover:bg-blue-700 
        text-white
        font-bold 
        block mx-auto
        w-[404px] h-[68px]
        py-2 px-4 rounded">
         {props.name}
        </button>
    )
}

export const Lastlink=(props)=>{
    return(
        <div className="flex pl-[32px] pb-[20px]">
            <p className="font-poppins text-[22px] h-[33px] w-[216px] text-[#76708F]">New to Loyaltydish?</p>
            <a className="font-poppins
            drop-shadow-lg
            shadow-black
            pt-[1px]
            underline
            text-[22px] h-[33px] w-[216px]
            text-[#6B4EEE]
            drop-shadow-2xl"href={`/${props.name==='Login'?'':'signup'}`} >{props.name}</a>
        </div>
    )
}

