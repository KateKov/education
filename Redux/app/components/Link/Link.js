import React from 'react';

const Link = ({active, children, onClick, className}) => {
	if(active) {
		className += " active";
	}

	return (
		<a className={className} href='#'
		   onClick={e => {
				e.preventDefault();
				onClick()
			}}
		>
			{children}
		</a>
	)
};

export default Link;