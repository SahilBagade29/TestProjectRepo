import React from 'react'

const Navbar = ({ filterItem , menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">

        {
            menuList.map((curElem) => {
                return (
                    <button className="btn-group__item" 
                    onClick={() => filterItem(curElem)}>    {/* map is used becze button shuoldnt repert */}
                    {curElem}</button>
                )
            })
        }

          {/* <button className="btn-group__item" onClick={() => filterItem("Breakfast")}>Breakfast</button>
          <button className="btn-group__item"onClick={() => filterItem("Lunch")}>Lunch</button>
          <button className="btn-group__item"onClick={() => filterItem("Snacks")}>Snacks</button>
          <button className="btn-group__item"onClick={() => filterItem("Dinner")}>Dinner</button>
          <button className="btn-group__item"onClick={() => filterItem("Desserts")}>Desserts</button>
           */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
