import React from 'react'

var LeftSideBar = React.createClass({
	render:function(){
		return (
			<div className='left-side-bar'>
				<NavBar />
			</div>
		)
	}
})

var NavBar = React.createClass({
	render: function(){
		return (
			<div className='nav-bar'>
				<input id='inputText' type='text' placeholder='Search...' />
			</div>
		)
	}
})

export default LeftSideBar