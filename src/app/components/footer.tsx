import '../globals.css'
export default function Footer(){
    return (
      <div className='grid grid-cols-7 gap-4'>
        <div className='col-start-2 col-span-2'>About us</div>
        <div className='col-start-4'>Write to us</div>
        <div className='col-start-6'>Contact us</div>
      </div>
    );
}