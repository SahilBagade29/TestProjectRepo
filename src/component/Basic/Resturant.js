import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(Menu.map((curElem) =>{    //new set is used to not to repert catogory
  return curElem.category
})),
"All",
];
 console.log(uniqueList);

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);

    const filterItem = (category) =>{
      debugger

      if(category === "All") {
        setMenuData(Menu)
        return;
      }

      const updatedList = Menu.filter((curElem) =>{   // filter method is used to select category like brakfast,lunch..
        return curElem.category === category;
      });
      setMenuData(updatedList);
    };

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
  </>
  )
};

export default Resturant
 