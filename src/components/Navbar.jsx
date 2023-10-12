const pages = [
  { label: 'Présentation', href: '/' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'Chat', href: '/chat' },
  { label: 'Reward', href: '/reward' },
]

const Navbar = () => {
  return (
    <section className='w-[80%] flex justify-between'>
      <div className='flex items-start justify-center w-full relative mt-8'>
        <img
          src='./avatar2.svg'
          alt='avatart'
          className='hidden lg:block rounded-full absolute top-[-140px] left-[0px]'
        />
        <nav className='flex justify-start items-start gap-6'>
          {pages.map(({ label, href }, index) => (
            <a
              href={href}
              key={index}
              className={
                href === window.location.pathname
                  ? 'text-dark pb-3 border-b-2 border-red-600 text-red-600 '
                  : 'text-dark pb-3 '
              }
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className='hidden lg:block'>
        <button className=' bg-red-600 text-white font-semibold py-4 px-7 rounded-lg mt-6'>
          Participer
        </button>
      </div>
    </section>
  )
}

export default Navbar
