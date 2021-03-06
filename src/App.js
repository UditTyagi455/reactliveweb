import React,{useEffect,useState} from "react";
import Card from "./component/Card";
import SearchBox from "./component/SearchBox"
import Axios from "axios";


const App = () =>{

  const [apiValue,setApiValue] =useState([]);
  const [isLoading,setIsLoading] =useState(true);
  const [term,setTerm] =useState('')
   
   const fetchApi = async () =>{

     try{
     const {data} = await Axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`);
     //console.log(data.hits);
     setApiValue(data.hits);
     setIsLoading(false);
     }
     catch(err){
       console.log(err);
     }
   }
 
    useEffect(()=>{
      fetchApi();
    },[term])

    

  return(
    <>  
        
      <div className="mx-auto container ">  
        <SearchBox searchText={(text)=>setTerm(text)}/> 
         
         {!isLoading && apiValue.length === 0 && <h1 className="flex justify-items-center justify-center text-4xl mt-36">No Image Found</h1> }

        {isLoading ? <h1 className="flex justify-items-center justify-center text-4xl mt-36">Loading...</h1> :    
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {apiValue.map((item) =>(
            <Card key={item.id} images={item}/>
         ))}
        </div>
       }
      </div>   
          
    </>
  )
}
export default App;