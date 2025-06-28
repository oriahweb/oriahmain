import { Metadata } from 'next';
import ErrorMain from '@/pages/error/error-main'
 
export const metadata: Metadata = {
  title: "Oria Consulting - Page non trouvée",
};

export default function NotFound() {
  return (
    <ErrorMain/>
  )
}