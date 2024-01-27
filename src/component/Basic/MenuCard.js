import React from 'react'

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
        <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const  {id, name, category, price, image, description} = curElem;   // Destructing
          debugger
          return (
            <>
            <div className="card-container" key={id}>
            <div className="card">
            <div className="card-body">
                <span className="card-number card-cirle subtle">{id}</span>
                <span className="card-author subtle" style={{color: "red"}}>{category}</span>
                <h2 className="card-title"> {name} </h2>
                <span className="card-description subtle">
                {description}
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src={image} className="card-media" />

            <span className="card-tag subtle">Order Now</span> 
            <span className="card-tag subtle" style={{color: "blue"}}>{price}</span>
            </div>
            </div>
            </>
          )
        })}
        </section>
    </>
  )
}

export default MenuCard;
