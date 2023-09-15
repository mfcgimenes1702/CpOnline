import Link from 'next/link';
import * as React from 'react';

export default function Button({children,icon,variant="primary",element="link", ...props}) {
  const styles = {
    primary: "flex intems-center gap-2 bg-blue-600 py-1 px-4 rounded hover:bg-blue-800",
    secundary:"flex intems-center gap-2 border-2 border-slate-500 py-1 px-4 rounded hover:bg-slate-700"
  }

  const variantClass = styles[variant]

  return (
    <>
    {element==="link"?
      <Link href= "#" {...props} className='flex inten-center gap-2 bg-blue-600 py-1 px-4 rounded hover:bg-blue-800'>
       {icon}
       {children}
      </Link>
  :
      <input type="submit" value={children}/>  
  }
  </>
    )
}