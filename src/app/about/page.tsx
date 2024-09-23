import { CardContent, CardTitle } from '@/components/ui/card';
import '../globals.css';
import { Card,Image } from '@nextui-org/react';

export default function about() {
    return (
      <>
         <h2 className=" px-7 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight w-full">About us</h2>
       <div className="grid grid-rows-3">
        <div><Card className='h-96 w-full'>
        <CardContent><Image src={'https://kj1bcdn.b-cdn.net/media/37672/how-does-makhana-grow-in-india2.jpg'} className='w-full' ></Image></CardContent>
        </Card></div>
        <div className="p-6">Since 2016, we have proudly embraced the rich heritage of Bihar, the birthplace of our exceptional foxnuts. We are honored to extend our family legacy of domestic trade into the international market, offering 100% organic, pure, and natural foxnuts. These are cultivated with care and precision to uphold the highest standards of excellence.</div>
        <div></div>
       </div>
      </>
    )
  }