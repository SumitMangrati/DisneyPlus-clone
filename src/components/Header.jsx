import React , {useState} from 'react'
import logo from './../assets/images/Disney-Plus-Logo-PNG.png'
import { HiHome ,
      HiMagnifyingGlass,
      HiStar,
      HiPlayCircle,
      HiTv
} from 'react-icons/hi2';
import {HiPlus , HiDotsVertical} from 'react-icons/hi';
import Headeritem from './Headeritem';

function header() {

  const [toggle,setToggle]=useState(false);

  const menu=[
    {
      name:'Home',
      icon:HiHome
    },
    {
      name:'Search',
      icon:HiMagnifyingGlass
    },
    {
      name:'Watchlist',
      icon:HiPlus
    },
    {
      name:'Originals',
      icon:HiStar
    },
    {
      name:'Movies',
      icon:HiPlayCircle
    },
    {
      name:'Series',
      icon:HiTv
    },
  ]
  return (
    
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-8'>
          <img src={logo} alt='Disney Logo' className='w-[80px] md:w-[100px] object-cover' />
          
          <div className='hidden md:flex gap-8'>
            {menu.map((item)=>(
              <Headeritem name={item.name} Icon={item.icon}></Headeritem>
            ))}
            </div>

            <div className='flex md:hidden gap-5'>
            {menu.map((item,index)=>index<3&&(
              <Headeritem name={''} Icon={item.icon}></Headeritem>
            ))}
            <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
              <Headeritem name={''} Icon={HiDotsVertical}></Headeritem>
              {toggle?
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-6 py-4'>
              {menu.map((item,index)=>index>2&&(
              <Headeritem name={item.name} Icon={item.icon}></Headeritem>
            ))}
              </div> : null}
            </div>
            </div>
      </div>
        <div>
          <img src="https://thumbnailer.mixcloud.com/unsafe/390x390/extaudio/a/b/5/3/27f4-c9e4-4765-b86f-85cd8879f243.jpg" className='w-[40px] rounded-full' alt="" />
        </div>
    </div>
    
  )
}

export default header
