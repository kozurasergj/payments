import Button from "./Button.jsx"

const Header = () => {
  return (
    <section className='h-96 w-full'>
      <div
        style={{ backgroundImage: 'url("./header.png")' }}
        className='bg-cover bg-no-repeat bg-center h-96 w-full pt-6 flex flex-col justify-start'
      >
        <div className='bg-white flex justify-between py-3 px-6 w-[80%] mx-auto mb-16 rounded-lg bg-white shadow-md'>
          <div className=' max-lg:w-full flex justify-between items-center'>
            <span className='mr-7 font-semibold text-dark2 text-xl'>
              Coflow
            </span>
            <img
              src='./avatar.png'
              alt='avatart'
              className='rounded-full mr-2'
            />
            <div className=' hidden lg:flex  flex-col items-start'>
              <div className='flex items-center'>
                <span className='text-dark pr-2 text-lg'>VodK</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='11'
                  height='11'
                  viewBox='0 0 11 11'
                  fill='none'
                >
                  <path
                    d='M9.67077 4.98541L5.82077 8.84687C5.77494 8.8927 5.72528 8.92524 5.67181 8.94449C5.61834 8.96374 5.56105 8.97321 5.49994 8.97291C5.43882 8.97291 5.38153 8.96344 5.32806 8.94449C5.27459 8.92555 5.22494 8.89301 5.1791 8.84687L1.31764 4.98541C1.2107 4.87846 1.15723 4.74478 1.15723 4.58437C1.15723 4.42395 1.21452 4.28645 1.3291 4.17187C1.44368 4.05728 1.57737 3.99999 1.73014 3.99999C1.88292 3.99999 2.0166 4.05728 2.13118 4.17187L5.49994 7.54062L8.86869 4.17187C8.97563 4.06492 9.10748 4.01145 9.26423 4.01145C9.42098 4.01145 9.55649 4.06874 9.67077 4.18333C9.78535 4.29791 9.84264 4.43159 9.84264 4.58437C9.84264 4.73714 9.78535 4.87083 9.67077 4.98541Z'
                    fill='#222222'
                  />
                </svg>
              </div>
              <span className='text-gray font-semibold	'>@VodKprod</span>
            </div>
          </div>
          <div className='hidden lg:flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
            >
              <path
                d='M14.4086 19.9473C14.4086 22.1312 17.9519 23.9036 22.3213 23.9036C26.6907 23.9036 30.234 22.1312 30.234 19.9473M1.7482 12.0345C1.7482 14.2184 5.29152 15.9909 9.66094 15.9909C11.4429 15.9909 13.0872 15.6965 14.4086 15.1996M1.7482 17.5734C1.7482 19.7574 5.29152 21.5298 9.66094 21.5298C11.4429 21.5298 13.0856 21.2355 14.4086 20.7385M22.3213 17.5734C17.9519 17.5734 14.4086 15.801 14.4086 13.6171C14.4086 11.4332 17.9519 9.66071 22.3213 9.66071C26.6907 9.66071 30.234 11.4332 30.234 13.6171C30.234 15.801 26.6907 17.5734 22.3213 17.5734Z'
                stroke='#222222'
                stroke-width='2.37382'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M1.7482 5.70424V23.1123C1.7482 25.2962 5.29152 27.0686 9.66094 27.0686C11.4429 27.0686 13.0856 26.7743 14.4086 26.2774M14.4086 26.2774V13.617M14.4086 26.2774C14.4086 28.4613 17.9519 30.2337 22.3213 30.2337C26.6907 30.2337 30.234 28.4613 30.234 26.2774V13.617M17.5737 10.4519V5.70424'
                stroke='#222222'
                stroke-width='2.37382'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M9.66078 9.66036C5.29137 9.66036 1.74805 7.8879 1.74805 5.70399C1.74805 3.52007 5.29137 1.74762 9.66078 1.74762C14.0302 1.74762 17.5735 3.52007 17.5735 5.70399C17.5735 7.8879 14.0302 9.66036 9.66078 9.66036Z'
                stroke='#222222'
                stroke-width='2.37382'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <form className='flex'>
              <input
                className='rounded-md border border-gray mr-5 pl-4 ml-5'
                placeholder='Search'
              />
              <Button />
            </form>
          </div>
        </div>
        <div className='flex flex-col items-center px-4'>
          <h2 className='text-white text-5xl font-extrabold pb-2'>
            Hello there
          </h2>
          <p className='text-white md:text-2xl font-extrabold text-center '>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi
          </p>
          <p className='text-white md:text-2xl font-extrabold text-center '>
            exercitationem quasi. In deleniti eaque aut repudiandae et a id
            nisi.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Header
