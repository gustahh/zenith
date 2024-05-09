import React from 'react';

function Face(props) {
	const title = props.title || "face plus";

	return (
		<svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={`${props.className}`}>
	<title>{title}</title>
	<g fill="#000000" stroke={`${props.stroke}`}>
		<path d="M11.25,11.758c-.472,.746-1.304,1.242-2.25,1.242s-1.778-.496-2.25-1.242" fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		<path d="M10.557,1.922c-.502-.11-1.022-.172-1.557-.172C4.996,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25,7.25-3.246,7.25-7.25c0-.247-.013-.491-.037-.732" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		<circle cx="6" cy="9" r="1" stroke="none"/>
		<circle cx="12" cy="9" r="1" stroke="none"/>
		<line fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="14.75" x2="14.75" y1="1.25" y2="6.25"/>
		<line fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="17.25" x2="12.25" y1="3.75" y2="3.75"/>
	</g>
</svg>
	);
};

export default Face;