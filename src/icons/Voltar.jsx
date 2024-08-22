import React from 'react';

function Voltar(props) {
	const title = props.title || "chevron left";

	return (
		<svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={`${props.className}`}>
	<title>{title}</title>
	<g fill="#000000">
		<polyline fill="none" points="11.5 15.25 5.25 9 11.5 2.75" stroke={`${props.stroke}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	</g>
</svg>
	);
};

export default Voltar;