import React, { useContext,useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets"; 
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount,setItemCount]=useState(0)
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
       
        <img className="food-item-image" src={image || "/images/default-food.jpg"} alt={name} />

        {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
        :<div className='food-item-counter'>
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>

          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
         
          <img src={assets?.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;












// import React, { useContext } from "react";
// import "./FoodItem.css";
// import { assets } from "../../assets/assets"; 
// import { StoreContext } from "../../context/StoreContext";

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
//   const itemCount = cartItems[id] || 0; // Ensure only the selected item updates

//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img className="food-item-image" src={image || "/images/default-food.jpg"} alt={name} />
        
//         {!itemCount ? (
//           <img 
//             className="add" 
//             onClick={() => addToCart(id)} // Click affects only this item's ID
//             src={assets.add_icon_white} 
//             alt="Add" 
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="-" />
//             <p>{itemCount}</p>
//             <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="+" />
//           </div>
//         )}
//       </div>
      
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets?.rating_stars} alt="Rating" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">Rs.{price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
