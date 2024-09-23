
import { ProductCard } from "../Components" ;
import { useTitle } from "../Hooks/useTitle";

export const Home = () => {

useTitle("Home");

const products = [
  {'id':1 , "name":"iphone16pro", "price":112000 , "image": "/assets/images/iphone16pro.jpeg" },
  {'id':2, "name":"iphone16", "price":99000 , "image": "/assets/images/iphone16.jpeg" },
  {'id':3 , "name":"nordblack", "price":40000 , "image": "/assets/images/nordblack.png" },
  {'id':4 , "name":"nothing Phone 1", "price":25000 , "image": "/assets/images/nothing1.png" },
  {'id':5 , "name":"onplusNord", "price":112000 , "image": "/assets/images/onplusNord.png" }
]



  return (
    
      <main>
    <section className="products">
      {products.map((product)=>(
      <ProductCard key={product.id} product={product} />
      ))}
      
    </section>
  </main>
 
  )
}
