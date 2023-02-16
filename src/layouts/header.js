import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className="bg-gray-900">
			<div className="flex h-20 max-w-screen-2xl mx-auto items-center px-10 justify-between sm:flex-col md:flex-row">
				<div className="w-1/2 flex sm:justify-center md:justify-start sm:pt-2">
					<Link to={'/'}>
						<p className="text-white text-2xl font-bold cursor-pointer">GOMOVIE</p>
					</Link>
				</div>
				<div className="w-1/2 flex flex-row md:justify-end sm:justify-center md:pb-0 sm:pb-2">
					<Link to={'/actors'}>
						<p className="mr-5 text-orange-500 font-semibold md:text-xl sm:text-sm cursor-pointer border-b-2 border-b-transparent hover:text-orange-600 hover:border-b-orange-600  transition">
							Actors
						</p>
					</Link>
					<Link to={'/genres'}>
						<p className="text-orange-500 font-semibold md:text-xl sm:text-sm cursor-pointer border-b-2 border-b-transparent hover:text-orange-600 hover:border-b-orange-600  transition">
							Genres
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
