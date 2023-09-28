const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between w-96 items-center border border-gray-500 mb-3 p-4 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex gap-2 w-full items-center">
          <span className="text-sm border-r pr-2">01.02.2023</span>
          <span className="text-md">{totalProducts} Products</span>
          <span className="font-black ml-auto flex flex-nowrap items-center gap-1">
            $ {totalPrice}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
