import Contact from "../_components/Contact";
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact-Chandrajit', 
  description: 'Chandrajit - Frontend Developer Portfolio | Varanasi, India',
};
const ContactServer=()=>{
  return(<>
   
  <Contact />
  </>)
}
export default ContactServer;