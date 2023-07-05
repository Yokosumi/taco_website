import { Icons } from "./Icons";
import { Images } from "./Images";

export const Footer = () => {
  return /*html*/ `
${Images()} ${Icons()}
<p>1983 Glenferrie Road, Hawthorn • (03) 93827 3625</p>
<div class="container_column">
	<ul>
		<li>
			<a href="#">Style Guide</a>
		</li>
		<li>
			<a href="#">Licenses</a>
		</li>
		<li>
			<a href="#">Changelog</a>
		</li>
		<li>
			<a href="#">Getting Started</a>
		</li>
		<li>
			<a href="#">More Templates</a>
		</li>
	</ul>
</div>
<div class="button_container">
	<a href="#Top"><img
			src="https://assets.website-files.com/6196d22f14605588db7936dc/6196d93fff4de63e2eea725f_icon-arrow-up.svg"
			alt="an orange circle with a arrow pointing up" /></a>
	</div>
	`;
};
