import React from 'react';

function Fechar(props) {
	const title = props.title || "xmark";

	return (
		<svg height="24" width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#999999" stroke="#999999">
		<line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="14" x2="4" y1="4" y2="14"/>
		<line fill="none" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="4" x2="14" y1="4" y2="14"/>
	</g>
</svg>
	);
};

export default Fechar;