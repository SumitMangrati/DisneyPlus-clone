import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import {HiChevronLeft , HiChevronRight} from 'react-icons/hi';
import HrMovieCard from './HrMovieCard';
const screenWidth = window.innerWidth;

function MovieList({genreId,index_}) {

    const [movieList , setMovieList]=useState([]);
    const elementRef = useRef();
    const scrollLeft=(element)=>{
        element.scrollLeft-=500 ;
      }
      const scrollRight=(element)=>{
        element.scrollLeft+=500;
      }


    useEffect(()=>{
        getMovieByGenreId();
    }
    )
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            //console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
  return (
    <>
    <HiChevronLeft className={`hidden md:block text-[30px] absolute left-8 ${index_%3==0?'mt-[80px]':'mt-[150px]'} cursor-pointer`} onClick={()=>scrollLeft(elementRef.current)}></HiChevronLeft>
        <HiChevronRight className={`hidden md:block text-[30px] absolute mx-8 ${index_%3==0?'mt-[80px]':'mt-[150px]'} right-0  cursor-pointer`} onClick={()=>scrollRight(elementRef.current)}></HiChevronRight>

    <div className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5' ref={elementRef}>
      {movieList.map((item,index)=>(
        <>
        {index_%3 ==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}
        </>
      ))}
    </div>
    </>
  )
}

export default MovieList
