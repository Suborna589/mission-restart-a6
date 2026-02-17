console.log("connect");  


const url ="https://fakestoreapi.com/products";  
let items =[];


const showAllProducts =(items)=>{
    const container = document.getElementById("items");
    container.innerHTML= ""; 

    items.forEach((item)=>{ 
        const div = document.createElement("div");
        div.className = "";

        div.innerHTML = `
     
        
        <div class="card bg-base-100  shadow-sm  space-x-4 mb-9 h-[470px] pt-6">
  <figure>
    <img
      src=${item.image}
       class="w-[220px] h-[240px]"
      alt="Shoes" /> 
     
  </figure> 


    <div class="card-body ">
   <div class="flex justify-between">
    <span class="bg-blue-200 text-blue-600 w-[105px] pl-1 rounded-xl">${item.category}</span>
    <span><i class="fa-solid fa-star text-orange-500"></i>${item.rating.rate}<span>(${item.rating.count})</span></span>

   </div>
    <p class="font-semibold">${item.title}</p>
    <span class="font-bold"> $${item.price}</span>


          <div class="flex justify-between gap-3">  

      <button class="btn rounded-lg pl-9 pr-9">
        <i class="fa-regular fa-eye"></i>
 Details
</button>
      
      <button class="btn btn-primary pl-11 pr-11 rounded-lg"><i class="fa-solid fa-cart-shopping"></i>Add</button> 
    </div>
 
  </div>
</div> 

        
        
        
        
        `; 

        container.appendChild(div);


    });

 
 
    

};  





const getAllProducts =()=>{
     fetch(url)
.then(res=>res.json()) 
.then(data => {console.log(data);
    showAllProducts(data);
}
    
); 

};

const loadCategory=()=>{ 

    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(data=>{ console.log(data)
        displayCategories(data);

    });



}; 
 
const displayCategories = (categories) =>{
    const categoryContaine =document.getElementById("categories");
   categoryContaine.innerHTML=" ";
  
   
   

    categories.forEach(categori=>{
          const btnDiv = document.createElement("div");

          btnDiv.innerHTML=` 

          <button class="btn btn-outline btn-primary">${categori}</button>
        
          `;

             categoryContaine.append(btnDiv);

    })



} ;

loadCategory();




