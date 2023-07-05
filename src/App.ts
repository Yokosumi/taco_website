import "./styles/main.scss";
import { getMenu, getCurrentPage } from "./Router";
import { Footer } from "./components/Footer";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
<header>
	<a href="#">
		<img src="https://assets.website-files.com/6196d22f14605588db7936dc/61970638f6ae6df8eb498e35_Tacos-Logo.svg"
			alt="taco logo">
	</a>
	<nav>
		${getMenu()}
	</nav>
</header>
<main>
	${getCurrentPage()}
</main>
<footer>
	${Footer()}
</footer>
`;
