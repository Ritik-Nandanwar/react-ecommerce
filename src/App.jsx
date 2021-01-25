import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function App() {
	const [totalAmount, setTotalAmount] = React.useState(100)
	let price = totalAmount * 100

	const Ontoken = token => {
		const data = { token, totalAmount }
		axios.post('http://localhost:3333/api/payment', data)
			.then(res => {
				console.log(res)
				alert("Pyment success")
			})
			.catch(error => console.log(error))
	}
	return (
		<div className="">
			<StripeCheckout stripeKey="pk_test_51I4mY3Ln0MQyz2xR5tXPzrMB7gTypjrFFUgGFZN45fOB5eL0mF4RNAoNfvVti7cr5hIJpy72yu3JL8cNiC8ljU1M00Y3C8cxIJ"
				token={Ontoken}
				amount={price}
				description={`total pay ${totalAmount}`}
			></StripeCheckout>
		</div>
	)
}

export default App;
