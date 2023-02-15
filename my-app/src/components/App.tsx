import { createSignal } from 'solid-js';

function App() {
  const [message, setMessage] = createSignal('Hello, World!');

  setTimeout(() => setMessage('Hello, SolidJS!'), 1000);

  return (
    <div>
      <h1>{message()}</h1>
    </div>
  );
}

export default App;