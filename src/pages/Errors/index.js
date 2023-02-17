import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../assets/images/proxy.png'

export default function Error() {
	return (
		<div className="w-3/4 min-h-[500px] flex flex-col items-center justify-center my-20 mb-10 bg-cyan-800 p-10 rounded-lg">
			<p className="md:text-9xl sm:text-6xl font-bold text-cyan-200">OOPS!</p>
			<p className="text-4xl text-cyan-100 mt-4 text-center bg-cyan-900 p-4 rounded-sm">
				I'm sorry this happen because the proxy need to be activated before access this website.
			</p>
			<p className="text-2xl text-cyan-200 mt-4 text-center ">
				<a target="__blank" href="https://cors-anywhere.herokuapp.com/corsdemo">
					1. <span className="font-bold hover:text-cyan-300 transition underline">Click Here</span>
				</a>
			</p>
			<p className="text-2xl text-cyan-200 mt-1 text-center">
				2. You will see this button
				<img alt="button for activate" className="pt-2" src={Img} />
			</p>
			<p className="text-2xl text-cyan-200 mt-1 text-center">
				3. After you click it, go back and{' '}
				<span className="font-bold hover:text-cyan-300 transition underline">
					<Link to="/movies">click here</Link>
				</span>
			</p>
			<p className="text-2xl text-cyan-200 mt-1 text-center">4. Enjoy</p>
		</div>
	)
}
