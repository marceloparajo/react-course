import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  console.log(currentPath.lastIndexOf('/') + 1)

  return (
    <div>
      <Layout>
      <div className='flex items-center w-80 justify-center relative mb-4'>
        <Link to='/my-orders' className="left-0 absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        </Link>
        <h1>My Order</h1>
      </div>
        <div className="flex flex-col gap-2 w-80">
          {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images?.[0]}
              price={product.price}
            />
          ))
          }
        </div>
        
        
      </Layout>
    </div>
  );
}

export default MyOrder;
