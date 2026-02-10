
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
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Counter));