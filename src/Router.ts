import * as tools from "./tools";
import { PageMenu } from "./pages/PageMenu";
import { PageNews } from "./pages/PageNews";
import { PageAbout } from "./pages/PageAbout";
import { PageContact } from "./pages/ContactPage";
import { PageBooking } from "./pages/BookingPage";
import "./public/images/taco_logo.svg";

const pageNames = ["Menu", "News", "About", "Contact", "Booking"];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "":
    case "menu":
      return PageMenu();
    case "news":
      return PageNews();
    case "about":
      return PageAbout();
    case "contact":
      return PageContact();
    case "booking":
      return PageBooking();
    default:
      return "404 Error";
  }
};

export const getMenu = () => {
  const getMenuClass = (pageName: string) => {
    const pageIdCode = pageName.toLowerCase();
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<ul>
		${pageNames
      .map(
        (pageName) =>
          `<li><a href="${pageName.toLowerCase()}"${getMenuClass(
            pageName
          )}>${pageName}</a></li>`
      )
      .join("")}
	</ul>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === "" ? pageNames[0].toLowerCase() : currentPageIdCode;
  return currentPageIdCode;
}
