import { createGlobalStyle } from "styled-components";

const NormalizeStyles = createGlobalStyle`
  *,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}
	body {
		font-family: "Space Grotesk", sans-serif;	
	}
`;

export default NormalizeStyles;
