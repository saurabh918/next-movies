import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar