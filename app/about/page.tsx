import type { Metadata } from 'next';
import About from '../_components/About';
export const metadata: Metadata = {
  title: 'About-Chandrajit', 
  description: 'Chandrajit - Frontend Developer Portfolio | Varanasi, India',
};
const AboutServer=()=>{
  return(<>
   
         <About />
  </>)
}
export default AboutServer