import { ReactNode } from 'react';

export interface InterfacePropsChildren{
  children: React.ReactNode,
}

export interface InterfacePropsUIModal{
  children: React.ReactNode,
  onClose: ()=>void,
}

export interface InterfaceSidebarNavProps{
  tag: string,
  link: string,
  text: string,
  icon: ReactNode,
}