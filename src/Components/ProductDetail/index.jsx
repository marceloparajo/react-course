import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-4 border border-black rounded-lg bg-black text-white w-[360px] h-[calc(100vh-100px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button className="cursor-pointer"
          onClick={() => {
            context.closeProductDetail();
          }}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images?.[0]}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-xl">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          ${context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          ${context.productToShow.description}
        </span>{" "}
      </p>
    </aside>
  );
};

export default ProductDetail;
