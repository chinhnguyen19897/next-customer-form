import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/"
                                      className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                      aria-current="page">Homepage</Link>
                                <Link href="/customer-list"
                                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >Customer List</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar