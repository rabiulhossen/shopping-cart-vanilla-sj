/* 
* ? variable declare
*/

let shop  =document.getElementById('shop');

const increment =()=>{
     console.log("plus")
}
const decrement =()=>{
console.log("minus")
}
const update =()=>{

}
let shopData = [
     {
          id:"1",
          name:"funtional drone",
          price:200,
          desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, qui.",
          img:"./gadget-3.jpg"

     },
     {
          id:"2",
          name:"watch",
          price:145,
          desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, qui.",
          img:"./gadget-2.jpg"

     },
     {
          id:"3",
          name:"gadget",
          price:45,
          desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, qui.",
          img:"./gadget-1.jpg"

     },
     {
          id:"4",
          name:"dive camera",
          price:45,
          desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, qui.",
          img:"./gadget-4.jpg"

     },
     {
          id:"4",
          name:"dive camera",
          price:45,
          desc:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, qui.",
          img:"./gadget-4.jpg"

     },
     {
          id:"4",
          name:"dive camera",
          price:45,
          desc:"This is awesome camara for deep divers",
          img:"./gadget-4.jpg"

     },
]

let basket = [];



const generateShp =()=> {
return shop.innerHTML =  shopData.map((list)=>{
   return  ` 
   <div class="item">
           <img src=${list.img} alt="" />
           <div class="details">
             <h3>${list.name}</h3>
             <p>
              ${list.desc}
             </p>
             <div class="price_quantity">
               <h2>${list.price}</h2>
               <div class="buttons">
                 <p>  <i class="bi bi-dash-circle-dotted" onClick="decrement()"></i> </p>
                 <div id=&{list.id} class="quantity"> 0 </div>
                 <p onClick="increment()">  <i class="bi bi-plus-circle-dotted"></i></p>
               </div>
             </div>
           </div>
         </div>
   
   `;
}).join('')
}

generateShp()
