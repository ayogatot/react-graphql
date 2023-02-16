import React from 'react'
import Header from './header'

export default function Layout(props) {
	return (
		<>
			<Header />
			<div className="flex flex-col w-full px-4 mx-auto max-w-screen-xl items-center">{props.children}</div>
		</>
	)
}