import React from 'react';

function FaceSmileCinza(props) {
	const title = props.title || "face smile 2";

	return (
		<svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#999999" stroke="#999999">
		<circle cx="9" cy="9" fill="none" r="7.25" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		<circle cx="6" cy="9" r="1" stroke="none"/>
		<circle cx="12" cy="9" r="1" stroke="none"/>
		<path d="M11.25,11.758c-.472,.746-1.304,1.242-2.25,1.242s-1.778-.496-2.25-1.242" fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	</g>
</svg>
	);
};

export default FaceSmileCinza;