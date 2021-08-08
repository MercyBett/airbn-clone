import Image from "next/image"
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left -the logo*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
         src="https://links.papareact.com/qd3"
         layout="fill"
         objectFit="contain"
         objectPosition="left"/>
      </div>
      {/* middle - the search */}
      <div className="flex-grow items-center rounded-full md:border-2 md:shadow-sm py-2">
        <input className="outline-none bg-transparent pl-5 text-gray-400 text-sm" type="text" placeholder="Search" />
        {/* <SearchIcon className="hidden md:inline-flex md:mx-2 p-2 h-8 bg-red-400 text-white rounded-full cursor-pointer"/> */}
      </div>
      {/* right - the profile-ish*/}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become  a host</p>
        {/* <GlobeAltIcon className="h6 cursor-pointer"/> */}
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          {/* <MenuIcon className="h-6"*/}
          {/* <UserCircleIcon className="h-6"/> */}
        </div>
      </div>
    </header>
  )
}

export default Header