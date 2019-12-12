import App from "../components/apollo-example/App";
import InfoBox from "../components/apollo-example/InfoBox";
import Header from "../components/Header";
import Submit from "../components/apollo-example/Submit";
import PostList from "../components/apollo-example/PostList";
import { withApollo } from "../utils/apollo";

const ClientOnlyPage = props => (
  <App>
    <Header />
    <div className="container">
      <InfoBox>
        ℹ️ This example shows how to disable apollos query fetching on the
        server. If you <a href="/client-only">reload</a> this page, you will see
        a loader since Apollo didn't fetch any data on the server. This allows{" "}
        <a
          href="https://nextjs.org/blog/next-9#automatic-static-optimization"
          target="_blank"
          rel="noopener noreferrer"
        >
          automatic static optimization
        </a>
        .
      </InfoBox>
      <Submit />
      <PostList />
    </div>
  </App>
);

export default withApollo(ClientOnlyPage, {
  ssr: false // Disable apollo ssr fetching in favour of automatic static optimization
});
