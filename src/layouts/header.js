import React from 'react'

export default function Header() {
	return (
		<div className="flex h-20 bg-gray-900 items-center px-10 justify-between shadow-lg sm:flex-col md:flex-row">
			<div className="w-1/2 flex sm:justify-center md:justify-start sm:pt-2">
				<p className="text-white text-2xl font-bold ">GOMOVIE</p>
			</div>
			<div className="w-1/2 flex flex-row md:justify-end sm:justify-center md:pb-0 sm:pb-2">
				<p className="mr-5 text-orange-500 font-semibold md:text-xl sm:text-sm cursor-pointer border-b-2 border-b-transparent hover:text-orange-600 hover:border-b-orange-600  transition">
					Actors
				</p>
				<p className="text-orange-500 font-semibold md:text-xl sm:text-sm cursor-pointer border-b-2 border-b-transparent hover:text-orange-600 hover:border-b-orange-600  transition">
					Genres
				</p>
			</div>
		</div>
	)
}
