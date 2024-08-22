import React from 'react';

function Adicionar(props) {
	const title = props.title || "square plus";

	return (
		<svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#f1f1f1" stroke="#f1f1f1">
		<rect height="12.5" width="12.5" fill="none" rx="2" ry="2" stroke="#f1f1f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x="2.75" y="2.75"/>
		<line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="5.75" x2="12.25" y1="9" y2="9"/>
		<line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="9" x2="9" y1="5.75" y2="12.25"/>
	</g>
</svg>
	);
};

export default Adicionar;