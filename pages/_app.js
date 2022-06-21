import "@styles/globals.css";
import { BaseLayout } from "@components/layout";


const Noop = () => <>{children}</>

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
