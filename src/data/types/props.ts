import { ReactNode } from 'react';

export type TypePropsChildren={
  children: React.ReactNode,
}

export type TypePropsUIModal={
  children: React.ReactNode,
  onClose: ()=>void,
}

export type TypeSidebarNavProps={
  tag: string,
  link: string,
  text: string,
  icon: ReactNode,
}