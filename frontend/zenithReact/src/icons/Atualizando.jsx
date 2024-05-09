import React from 'react';

function Atualizando(props) {
	const title = props.title || "refresh 2";

	return (
		<svg height="14" width="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={`${props.className}`}>
	<title>{title}</title>
	<g fill="#000000" stroke={`${props.stroke}`}>
		<polyline fill="none" points="8.5 12.75 10.75 15 8.5 17.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		<polyline fill="none" points="9.5 5.25 7.25 3 9.5 .75" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		<path d="M4.952,4.238c-1.347,1.146-2.202,2.855-2.202,4.762,0,3.452,2.798,6.25,6.25,6.25,.579,0,1.14-.079,1.672-.226" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		<path d="M13.048,13.762c1.347-1.146,2.202-2.855,2.202-4.762,0-3.452-2.798-6.25-6.25-6.25-.597,0-1.175,.084-1.722,.24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	</g>
</svg>
	);
};

export default Atualizando;