import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const arr_menus = ['HOME', 'WORK', 'ABOUT']

  // const currentPath = router.pathname;
  let pathname = usePathname()
  pathname == '/'? pathname = "home": ""
  pathname = pathname.replace("/","")
  return (
    <nav className='text-white p-5 flex justify-between fixed w-full z-10'>
          <h2 className='cursor-pointer'>Victor Cunha</h2>

        <ul className='flex gap-8  '>
          {arr_menus.map((item, key)=>{
            return <>{
              item.toLowerCase() == pathname ?
              <li className='relative ' >
                
                  {item}

                <span className='absolute text-white  top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-3 h-1 rounded-md  border border-solid bg-white'></span>
              </li> : 
              
              <Link href={`${item == 'HOME'? '/': item.toLowerCase()}`}>
                <li className='text-white transition-all'>{item}</li> 
              </Link>
            }</>
          })}
        </ul>
      </nav>
  )
}
