
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Loginpage from './components/login';
import RootLayout from './layouts/Rootpage';
import Signup from './components/signup'



function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {index:true,element:<Loginpage/>},
        {path:'signup',element:<Signup/>}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
