import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Aside=()=>{
    
    
    
    return(<>
              <aside className='fixed top-[50%] left-0 translate-y-[-50%] translate-x-[-70%]'>
                  <ul className='flex flex-col gap-2 social-link z-100'>
                    <li>
                      <Link href="https://www.linkedin.com/in/chandra98/" target="_blank"  className='flex gap-1'>
                       <span className='min-w-[100px] text-center text-shadow-2xs text-shadow-black/65 font-bold'> LinkedIn</span>
                        <FaLinkedin className="h-8 w-8  hover:text-accent-color transition shadow-2xl" />
                      </Link>
                    </li>
                    <li>
                       <Link href="https://github.com/chandrajit19" target="_blank"  className='flex gap-1'>
                         <span className='min-w-[100px] text-center text-shadow-2xs text-shadow-black/65 font-bold'>GitHub</span>
                         <FaGithub className="h-8 w-8  hover:text-accent-color transition" />
                       </Link>
                    </li>
                    <li>
                      <a href="mailto:chandrajit127@gmail.com" className='flex gap-1'>
                           <span className='min-w-[100px] text-center text-shadow-2xs text-shadow-black/65 font-bold'>Email</span>
                           <EnvelopeIcon className="h-8 w-8  hover:text-accent-color transition" />
                      </a>
                    </li>
                    <li>
                       <Link href="tel:+91-7525890345" className='flex gap-1'>
                           <span className='min-w-[100px] text-center text-shadow-2xs text-shadow-black/65 font-bold'>Call</span>
                           <PhoneIcon className="h-8 w-8  hover:text-accent-color transition" />
                       </Link>
                    </li>
                  </ul>
                </aside>
    
    
    </>)
}
export default Aside;