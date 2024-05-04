const Footer = () => {
  return (
    <div className='bg-orange-500 py-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <h3 className='text-xl md:text-3xl text-white font-bold tracking-tight mb-2 md:mb-0'>
          MernEats
        </h3>
        <span className='text-white font-medium flex gap-4'>
          <span className='cursor-pointer'>Privacy Policy</span>
          <span className='cursor-pointer'>Terms of Service</span>
        </span>
      </div>
    </div>
  )
}

export default Footer
