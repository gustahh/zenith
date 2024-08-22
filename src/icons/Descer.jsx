import React from 'react';

function Descer(props) {
	const title = props.title || "chevron down";

	return (
		<svg height="14" width="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={`${props.className}`}>
	<title>{title}</title>
	<g fill="#000000">
		<polyline fill="none" points="15.25 6.5 9 12.75 2.75 6.5" stroke={`${props.stroke}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	</g>
</svg>
	);
};

export default Descer;