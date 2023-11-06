/* EXPERIMENTAL, NOT ROBUST YET */


interface Props{
  children: React.ReactNode,
  size: 'xs'|'sm'|'md'|'lg',
  color: 'primary'|'secondary'|'success'|'warning'|'danger'|'light'|'dark',
  variant: 'outlined'|'contained'|'text',
}

const UIButton:React.FC<Props> = ({children, size='sm', color='primary', variant='outlined'}) => {
  let _size, _color;
  switch(size){
    case 'xs': _size=`p-3 text-md`; break;
    case 'sm': _size=`p-4 text-lg`; break;
    case 'md': _size=`p-5 text-2xl`; break;
    case 'lg': _size=`p-6 text-3xl`; break;
  }

  if(variant==='contained')
    switch(color){
      case 'primary': _color=`bg-gradient-to-b from-primary-500 to-secondary-700 text-white`; break;
      case 'secondary': _color=`bg-gradient-to-b from-secondary-600 to-primary-500 text-white`; break;
      case 'success': _color=`bg-gradient-to-b from-success-600 to-success-400 text-white`; break;
      case 'warning': _color=`bg-gradient-to-b from-warning-600 to-warning-400 text-black`; break;
      case 'danger': _color=`bg-gradient-to-b from-danger-600 to-danger-400 text-white`; break;
      case 'light': _color=`bg-gradient-to-b from-gray-50 to-gray-100 text-black`; break;
      case 'dark': _color=`bg-gradient-to-b from-gray-950 to-gray-800 text-white`; break;
    }

  if(variant==='outlined')
    switch(color){
      case 'primary': _color=`border border-solid border-primary-500 text-primary-500`; break;
      case 'secondary': _color=`border border-solid border-secondary-500 text-secondary-500`; break;
      case 'success': _color=`border border-solid border-success-500 text-success-500`; break;
      case 'warning': _color=`border border-solid border-warning-500 text-warning-600`; break;
      case 'danger': _color=`border border-solid border-danger-500 text-warning-600`; break;
      case 'light': _color=`border border-solid border-gray-50 text-gray-50`; break;
      case 'dark': _color=`border border-solid border-gray-950 text-gray-950`; break;
    }

  if(variant==='text')
    switch(color){
      case 'primary': _color=`text-primary-500`; break;
      case 'secondary': _color=`text-secondary-500`; break;
      case 'success': _color=`text-success-500`; break;
      case 'warning': _color=`text-warning-600`; break;
      case 'danger': _color=`text-warning-600`; break;
      case 'light': _color=`text-gray-50`; break;
      case 'dark': _color=`text-gray-950`; break;
    }

  return <>
    <button className={`rounded-lg font-semibold ${_size} ${_color}`}>
      {children}
    </button>
  </>
}
 
export default UIButton;