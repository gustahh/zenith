import React from 'react';

function ConfiguracoesVerde(props) {
	const title = props.title || "sliders";

	return (
		<svg height="24" width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#4e9f3d">
		<path d="M16.25,4.5h-2.357c-.335-1.29-1.5-2.25-2.893-2.25s-2.558,.96-2.893,2.25H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.357c.335,1.29,1.5,2.25,2.893,2.25s2.558-.96,2.893-2.25h2.357c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-5.25,2.25c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
		<path d="M16.25,12h-6.357c-.335-1.29-1.5-2.25-2.893-2.25s-2.558,.96-2.893,2.25H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.357c.335,1.29,1.5,2.25,2.893,2.25s2.558-.96,2.893-2.25h6.357c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z" fill="#4e9f3d"/>
	</g>
</svg>
	);
};

export default ConfiguracoesVerde;