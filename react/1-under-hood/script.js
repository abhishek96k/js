
function Counter() {
    const [count, setCount] = React.useState(0);
    const Increment = () => {
        if (count >= 0 && count < 10)
            setCount(count + 1);
    }
    // // without JSX
    // return React.createElement('div', null,
    //     React.createElement('p', null, 'Count: ' + count),
    //     React.createElement('button', { onClick: Increment }, 'Increment'),
    //     React.createElement('button', { onClick: () => setCount(0) }, 'Reset')
    // );

    // with JSX
    console.log("child render");

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

function CounterParent() {
    const [showMessage, setShowMessage] = React.useState(false);
    const [showMessage2, setShowMessage2] = React.useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
        setShowMessage2(!showMessage2);
    }

    console.log("parent render");

    return (
        <div>
            <h1>Counter App</h1>
            <Counter />
            {showMessage && <p>This is a message</p>}
            {showMessage2 && <p>This is another message</p>}
            <button onClick={toggleMessage}>Toggle Message</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(CounterParent));