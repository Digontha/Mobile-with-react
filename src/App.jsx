import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Phones from './components/Phones'
import Phone from './components/Phone'
import { FaCartArrowDown,FaCrosshairs,FaArrowAltCircleDown } from "react-icons/fa";

function App() {
  const [mainData, setMainData] = useState([])
  const [name,setName]=useState([])
  const[value,setValue]=useState(false)
  useEffect(()=>{
             fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
             .then(res=>res.json())
             .then(data=>setMainData(data.data))
  },[])
   
function handleName(data){
  const Have = name.find(item=>item.phone_name===data.phone_name)
  if(Have){
   toast("Already Have")
  }else{
    const newName=[...name,data]
    setName(newName)
  }
 

}







  return (
    <>
      <div className='md:flex  justify-center gap-5 px-[10%] my-10'>

        <div className='grid lg:w-[70%] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 '>
          {
            mainData.map(data=><Phones key={data.id} data={data} handleName={handleName}></Phones>)
          }
        </div>

        <div className='lg:w-[30%] '>

        <button  onClick={()=>{setValue(!value)}} className='text-3xl mb-3 mt-3'> {value?<FaCrosshairs></FaCrosshairs>:<FaCartArrowDown></FaCartArrowDown>} </button>

        {
          value && <div className="card  bg-primary text-primary-content">
          <div className="card-body">
          <h2 className="card-title"><span className='underline '>Add Phone</span> <FaArrowAltCircleDown></FaArrowAltCircleDown> </h2>
  
          {
            name.map((item,inx)=><Phone key={item.id} inx={inx} data={item}></Phone>)
          }
            
            <p></p>
            
          </div>
        </div>
        }
            

        </div>


      </div>
      <ToastContainer />
    </>
  )
}

export default App
