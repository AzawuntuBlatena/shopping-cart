import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex-inline gap-3 items-center  p-5 justify-between bg-red-400 mt-2 mb-2 rounded-xl w-auto ">
        <div className="flex p-3 ">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleRemoveFromCart}
            className="bg-blue-400 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
}
