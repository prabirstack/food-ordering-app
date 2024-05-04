import landingImg from '../assets/landing.png'
import appDownload from "../assets/appDownload.png"
const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-16'>
        <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-orange-600 mb-2 md:mb-4'>
          Tuck into a takeway today
        </h1>
        <span className='text-xl'>Food is just a click away!</span>
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingImg} alt='' />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Order takeway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
