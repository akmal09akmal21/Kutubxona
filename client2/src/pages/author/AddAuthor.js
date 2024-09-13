
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddAuthor = ()=>{
    const [name, setName] = useState("");
    const [biography, setBiography] = useState("");
    const [authors,setAuthors] = useState([])



    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post("http://localhost:5000/authors",{name,biography})
            if(data.success === true){
                setName("")
                setBiography("")
                toast.success(data.message)
            }
        } catch (error) {
            console.log(error.response.data.message);
      toast.error(error.response.data.message);
            
        }

    }

    useEffect(()=>{
        getAuthors()
    },[])
const getAuthors = async()=>{
    try {
        const {data}= await axios.get("http://localhost:5000/authors")
        if(data.success === true){
           setAuthors(data.mualliflar)
        }
    } catch (error) {
        
    }
}

    return(<>
    <div className="max-w-lg lg:ms-auto mx-auto text-center ">
        <div className="py-16 px-7 rounded-md bg-white">
          <form className="" onSubmit={handleSubmit}>
            <div className="grid w-full grid-cols-1 gap-6">

              <div className="md:col-span-2">
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Muallif ismini yozing..."
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                />
              </div>
          
          

              <div className="md:col-span-2">
                <textarea
                  type="text"
                  rows="5"
                  onChange={(e) => setBiography(e.target.value)}
                  value={biography}
                  cols=""
                  placeholder="Qisqacha tavsifi *"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300"
                >
                  Add Author +
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2>Books List</h2>

      

     {
        authors.map((el)=>(
            <Link href="#" key={el._id} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
   
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.biography}</p>
            </div>
        </Link>
        ))
     }

      </div>
    
    </>)
}


export default AddAuthor