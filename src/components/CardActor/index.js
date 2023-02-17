import React from 'react'
import { FaStar, FaImage } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CardActor({ data, loading }) {
	const rating = data?.rating || Math.floor(Math.random() * 5)
	return (
		<>
			{loading ? (
				<div className="m-4 transition animate-pulse">
					<div className="sm:w-[300px] md:w-[250px] h-[300px] rounded-t-md bg-cyan-800 flex flex-col justify-center items-center">
						<div className="bg-slate-400 h-4 w-32 rounded-lg my-1" />
						<div className="bg-slate-400 h-4 w-32 rounded-lg my-1" />
						<div className="bg-slate-400 h-4 w-32 rounded-lg my-1" />
					</div>
					<div className="p-2 bg-white rounded-b-md">
						<div className="bg-slate-400 h-2 w-20 rounded-md" />
						<div className="flex flex-row items-center justify-between">
							<div className="bg-slate-400 h-3 w-16 rounded-md" />
							<div className="flex flex-row items-center">
								<div className="bg-slate-400 h-4 w-4 rounded-md" />
							</div>
						</div>
					</div>
				</div>
			) : (
				<Link to={`/actors/${data.id}`}>
					<div className="m-4 cursor-pointer hover:scale-105 transition shadow-lg">
						<div className="sm:w-[300px] md:w-[250px] h-[300px] rounded-t-md bg-cyan-800 flex justify-center items-center">
							<FaImage size={150} color="white" />
						</div>
						<div className="p-2 bg-white rounded-b-md">
							<p className="text-orange-500 text-sm font-bold">{data?.genre}</p>
							<div className="flex flex-row items-center justify-between">
								<p>{data.name}</p>
								<div className="flex flex-row items-center">
									<p className="pr-1">{rating + 1}</p>
									<FaStar color="orange" />
								</div>
							</div>
						</div>
					</div>
				</Link>
			)}
		</>
	)
}
