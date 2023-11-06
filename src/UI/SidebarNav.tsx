import React from 'react'
import { ContextMain } from "../data/context/ContextMain"
import UIModal from "./Modal"
import { utilsUserNavbarList } from '../utils/navbar'
import UISidebarList from './Sidebar/List';
import UISidebarHeader from './Sidebar/Header';

const UISidebarNav:React.FC = ()=>{
  const context = React.useContext(ContextMain);
  return <>
    <UIModal onClose={context.sidebar.hideSidebar}>
        <UISidebarHeader />
        <ul className='mt-6 w-full flex flex-col space-y-2'>
          {utilsUserNavbarList.map(list=>{
            return (
              <UISidebarList
                key={list.tag}
                icon={list.icon}
                link={list.link}
                tag={list.tag}
                text={list.text}
              />
            );
          })}
        </ul>
    </UIModal>
  </>
}

export default UISidebarNav