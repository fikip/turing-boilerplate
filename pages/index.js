import React from "react";
import Layout from "../components/layout";
import Counter1 from "../components/state-example/Counter1";
import Counter2 from "../components/state-example/Counter2";

const Home = () => (
  <Layout>
    <h1>Cookie-based authentication example</h1>
    <p>Steps to test the functionality:</p>
    <ol>
      <li>Click Login and enter your GitHub username.</li>
      <li>
        Click Home and click Profile again, notice how your session is being
        used through a token stored in a cookie.
      </li>
      <li>
        Click Logout and try to go to Profile again. You'll get redirected to
        the `/login` route.
      </li>
    </ol>
    <Counter1 />
    <Counter2 />
    <style jsx>{`
      li {
        margin-bottom: 0.5rem;
      }
    `}</style>
  </Layout>
);

export default Home;
