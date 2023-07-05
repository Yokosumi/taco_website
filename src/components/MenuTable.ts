// export interface IMenuItem {
//   dish: string;
//   price: number;
// }

import menuTable from "../data/menuTable.json";
import "../styles/menu.scss";

export const MenuTable = () => {
  return /*html*/ `
<table>
   ${menuTable
     .map((menuItem) => {
       return /*html*/ `
        <tr>
        <td> ${menuItem.dish}</td>
        <td class="price"> ${menuItem.price}</td>
    </tr>
    `;
     })
     .join("")}
   </table>
    `;
};
