import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItemType } from "../../lib/types";

function CartItem({ cartItem }: { cartItem: CartItemType }) {
  const { removeItemFromCart, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext);

  return (
    <div className="grid grid-cols-[3fr_7fr] gap-3 border-b-2 py-2">
      <section>
        <Image
          src={cartItem.image}
          width={117}
          height={175}
          alt={cartItem.title}
        />
      </section>
      <section>
        <div>
          <h2 className="text-md font-normal">{cartItem.title}</h2>
        </div>
        <div className="flex flex-row items-start gap-1">
          <article className="product_regular pr-1">
            <span className="font-semibold text-md">
              ₹{cartItem.discountedPrice}
            </span>
          </article>
          <article className="product_sale pr-1">
            <span className="text-sm text-gray-500 line-through">
              ₹{cartItem.price}
            </span>
          </article>
          <article className="product_discount">
            <span className="text-md font-bold text-green-600">{23}% off</span>
          </article>
        </div>
        <div>
          <p className="text-gray-500">
            Size: <span className="text-black">{cartItem.size}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-500">
            Color: <span className="text-black">{"Lorem"}</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <section className="flex flex-row">
            <div className="border rounded-md px-4 py-1 flex flex-row gap-6">
              <button
                onClick={() =>
                  decrementItemQuantity(cartItem.id, cartItem.size)
                }
              >
                <IconMinus width={15} />
              </button>
              <span className="select-none">{cartItem.quantity}</span>
              <button
                onClick={() =>
                  incrementItemQuantity(cartItem.id, cartItem.size)
                }
              >
                <IconPlus width={15} />
              </button>
            </div>
          </section>
          <section>
            <span
              onClick={() => removeItemFromCart(cartItem.id, cartItem.size)}
              className="font-medium text-sm text-blue-800 underline cursor-pointer select-none"
            >
              Remove
            </span>
          </section>
        </div>
      </section>
    </div>
  );
}

export default CartItem;
