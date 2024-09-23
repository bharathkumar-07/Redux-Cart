import { CartCard } from "../Components"
import { useTitle } from "../Hooks/useTitle"
import { useCart } from "../context/CartContext";

export const Cart = () => {
 const { total , cartList} = useCart();
  useTitle("Cart");

 

  return (
    <main>
      <section className="cart">  
        <h1> Cart Items: {cartList.length}/ Rs:{ total } </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      
      </section>
    </main>
  )
}
