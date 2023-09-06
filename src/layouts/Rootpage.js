import { Outlet } from "react-router-dom"

const RootLayout=()=>{
    return(
        <>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full  space-y-4 bg-white">
    <Outlet/>
    </div>
    </div>
        </>
       
    )
}

export default RootLayout