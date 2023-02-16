import React from 'react'
import Header from './header'

export default function Layout(props) {
	return (
		<div className="min-h-screen bg-gray-800">
			<Header />
			<div className="flex flex-col w-full px-4 mx-auto max-w-screen-xl items-center">{props.children}</div>
		</div>
	)
}
