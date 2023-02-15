import { Title } from "solid-start";
import App from "~/components/App";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <App />
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <p>
      Visit{" "}
        <a href="https://webdeveloper.com/tips-tricks/getting-started-with-solidjs/" target="_blank">
          WebDeveloper
        </a>{" "}
        for the tutorial of the App component.
      </p>
    </main>
  );
}
