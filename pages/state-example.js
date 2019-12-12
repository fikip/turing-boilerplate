import Counter1 from "../components/state-example/Counter1";
import Counter2 from "../components/state-example/Counter2";
import Layout from "../components/layout";

const StateExample = () => (
  <Layout>
    <h1>Zustand + Immer global state example</h1>
    <p>Steps to test the functionality:</p>
    <ol>
      <li>Press the button that's in Counter1 component.</li>
      <li>See that state changes in both components, seamlessly.</li>
      <li>
        Check how exactly the state is handled in utils/stateUtils.js,
        stores/counterStore.js, components/state-example/Counter1.js &
        components/state-example/counter2.js
      </li>
    </ol>
    <Counter1 />
    <Counter2 />
  </Layout>
);

export default StateExample;
