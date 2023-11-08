import React from 'react'
import { utilsUserNavbarList } from '../utils/navbar'
import UISidebarNavPersistHeader from './SidebarNavPersist/Header'
import UISidebarNavPersistList from './SidebarNavPersist/List'

const UISidebarPersist:React.FC = ()=>{
  return <>
      <div className='fixed t-0 l-0 min-w-[25%] lg:min-w-[20%] pt-4 h-full hidden md:block bg-gradient-to-b from-primary-500 to-primary-400 text-gray-50'>
        <UISidebarNavPersistHeader />
        <ul className='mt-6 w-full flex flex-col space-y-2'>
          {utilsUserNavbarList.map(list=>{
            return (
              <UISidebarNavPersistList
                key={list.tag}
                icon={list.icon}
                link={list.link}
                tag={list.tag}
                text={list.text}
              />
            );
          })}
        </ul>
      </div>
  </>
}

export default UISidebarPersist