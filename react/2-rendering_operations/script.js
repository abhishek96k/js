const products = [
    { id: 1, name: "A", price: 20, category: "Electronics" },
    { id: 2, name: "B", price: 30, category: "Clothing" },
    { id: 3, name: "C", price: 40, category: "Electronics" },
    { id: 4, name: "D", price: 50, category: "Clothing" },
    { id: 5, name: "E", price: 60, category: "Electronics" },
]

const names = ["Alice", "Bob", "Lisa", "Alice", "Bob"]

function App() {
    return (
        <div>
            <h1>Rendering Lists and Conditional Operators</h1>
            <h5>
                Q.1 How does the map function work in react for rendering lists?
                Can you provide an example?
            </h5>

            <ul>
                {products.map((product) => {
                    return <li>
                        <strong>{product.name}</strong> -${product.price} - Category: {product.category}
                    </li>
                })}
            </ul>

            <h5>
                Q.2 How can you filter products with a specific category?
            </h5>
            <ul>
                {products.filter((product) => product.category === "Electronics").map((product) => {
                    return <li>
                        <strong>{product.name}</strong> -${product.price} - Category: {product.category}
                    </li>
                })}
            </ul>

            <h5>
                Q.3 How can you render a summary of total prices for products?
            </h5>
            <div>
                <p>Total Price Summary: {products.reduce((acc, product) => {
                    return acc + product.price;
                }, 0)}
                </p>
            </div>

            <h5>
                Q.4 Add discountedPrice key with 10% discount to all the products with price more than $20 and render it.
            </h5>
            <ul>
                {products.filter((product) =>
                    product.price > 20
                ).map((product) => {
                    return {
                        ...product,
                        discountedPrice: product.price - product.price * (10 / 100)
                    }
                }).map((product) => {
                    return <li>
                        <strong>{product.name}</strong> -${product.price} - Discounted: {product.discountedPrice}
                    </li>
                })
                }
            </ul>

            <h5>
                Q.5 How can you filter and render unique elements from an array using filter in React?
            </h5>

            {names.filter((name, index) => {
                return names.indexOf(name) === index
            }).map((name) => {
                return <li>{name}</li>
            })
            }
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));