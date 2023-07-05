import images from "../data/images.json";

export const Images = () => {
  return /*html*/ `<div class="container">
${images
  .map((imageItem) => {
    return /*html*/ `
		<img src="${imageItem.url}" alt="${imageItem.alt}">
	
		`;
  })
  .join("")} 
  </div>
    	 `;
};
