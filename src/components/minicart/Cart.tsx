import CartItem from "./CartItem"

import { useCartStore } from "../../stores/useCartStore"

import useFromStore from "../../hooks/useFromStore"

function Cart() {
	const cart = useFromStore(useCartStore, state => state.cart)
	const removeAllFromCart = useCartStore(state => state.removeAllFromCart)

	const checkout = (arr: any) => {
		alert("Checkout for a total of $" + total + " success!")
		removeAllFromCart()
	}

	let total = 0
	if (cart) {
		total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number), 0)
	}

	return (
		<section>
			<h3 className='text-2xl font-bold mb-4'>Shopping Cart</h3>
			<ul>
				{cart?.map(product => (
					<CartItem key={product.id} product={product} />
				))}
			</ul>
			<div className='flex justify-between items-center mt-4'>
				<span className='text-lg font-bold'>Total:</span>
				<span className='text-xl font-bold'>${total.toFixed(2)}</span>
				<button
					type='button'
					className='ml-2 bg-pink-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600'
					onClick={() => checkout(cart)}
				>
					Checkout
				</button>
			</div>
		</section>
	)
}

export default Cart
