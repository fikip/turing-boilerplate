import App from "../components/apollo-example/App";
import InfoBox from "../components/apollo-example/InfoBox";
import Header from "../components/Header";
import Submit from "../components/apollo-example/Submit";
import PostList from "../components/apollo-example/PostList";
import { withApollo } from "../utils/apollo";

const IndexPage = (props) => (
  <App>
    <Header />
    <div className="container">
      <InfoBox>
        ℹ️ This example shows how to fetch all initial apollo queries on the
        server. If you <a href="/">reload</a> this page you won't see a loader
        since Apollo fetched all needed data on the server. This prevents{" "}
        <a
          href="https://nextjs.org/blog/next-9#automatic-static-optimization"
          target="_blank"
          rel="noopener noreferrer"
        >
          automatic static optimization
        </a>{" "}
        in favour of full Server-Side-Rendering.
      </InfoBox>
      <Submit />
      <PostList />
    </div>
  </App>
);

export default withApollo(IndexPage);
