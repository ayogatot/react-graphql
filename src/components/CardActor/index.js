import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CardActor({ data, loading }) {
	return (
		<>
			{loading ? (
				<div className="transition animate-pulse w-full flex flex-row cursor-pointer shadow-lg">
					<div className="sm:w-[300px] md:w-[250px] h-[300px] rounded-l-md bg-cyan-800 flex justify-center items-center p-4">
						<div className="w-[150px] h-[150px] rounded-full bg-slate-400 flex justify-center items-center" />
					</div>
					{console.log(data)}
					<div className="p-2 w-full bg-white rounded-r-md flex flex-col justify-center pl-4">
						<div className="mt-3">
							<div className="bg-slate-400 h-2 w-16 rounded-md" />
							<div className="bg-slate-400 h-3 w-20 rounded-md mt-1" />
						</div>
						<div className="mt-4">
							<div className="bg-slate-400 h-3 w-20 rounded-md" />
							<div className="bg-slate-400 h-2 w-16 rounded-md mt-1" />
						</div>
						<div className="mt-3">
							<div className="bg-slate-400 h-2 w-16 rounded-md" />
							<div className="bg-slate-400 h-3 w-20 rounded-md mt-1" />
						</div>
					</div>
				</div>
			) : (
				<Link to={`/actors/${data.id}`}>
					<div className="w-full m-4 flex flex-row cursor-pointer hover:scale-105 transition shadow-lg">
						<div className="sm:w-[300px] md:w-[250px] h-[300px] rounded-l-md bg-cyan-800 flex justify-center items-center p-4">
							<div className="w-[150px] h-[150px] rounded-full bg-cyan-900 flex justify-center items-center">
								<FaUserAstronaut size={80} color="white" />
							</div>
						</div>
						{console.log(data)}
						<div className="p-2 w-full bg-white rounded-r-md flex flex-col justify-center pl-4">
							<div className="mt-3">
								<p className="text-xs text-orange-500 font-bold">Name</p>
								<p>{data?.name}</p>
							</div>
							<div className="mt-3">
								<p className="text-xs text-orange-500 font-bold">Age</p>
								<p>{data?.age}</p>
							</div>
							<div className="mt-3">
								<p className="text-xs text-orange-500 font-bold">Movie</p>
								<p>{data?.movies.length}</p>
							</div>
						</div>
					</div>
				</Link>
			)}
		</>
	)
}
