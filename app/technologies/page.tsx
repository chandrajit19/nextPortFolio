import Technologies from "../_components/Technologies";
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Technologies-Chandrajit', 
  description: 'Chandrajit - Frontend Developer Portfolio | Varanasi, India',
};
const TechnoServer=()=>{
  return(<>
          <Technologies />
  </>)
}
export default TechnoServer;