import React, { useEffect , useState , useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
import {HiChevronLeft , HiChevronRight} from 'react-icons/hi';
const screenWidth = window.innerWidth;
function Slider() {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

  useEffect(()=>{
    getTrendingVideos();
  },[])

  const getTrendingVideos=()=>{
    GlobalApi.getTrendingVideos.then(res=>{
      console.log(res)
      setMovieList(res.data.results);
    })
  }

  const scrollLeft=(element)=>{
    element.scrollLeft-=screenWidth - 110;
  }
  const scrollRight=(element)=>{
    element.scrollLeft+=screenWidth - 110;
  }
  
    return (

    <div>
        <HiChevronLeft className='hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>scrollLeft(elementRef.current)}></HiChevronLeft>
        <HiChevronRight className='hidden md:block text-[30px] absolute mx-8 mt-[150px] right-0  cursor-pointer' onClick={()=>scrollRight(elementRef.current)}></HiChevronRight>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
      {movieList.map((item , index)=>(
        <img src={IMAGE_BASE_URL+item.backdrop_path} alt=""  className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
      ))}
    </div>
    </div>
  )
}

export default Slider
Slider