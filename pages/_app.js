import dynamic from "next/dynamic";
import '../styles/globals.scss'

import { TranslationProvider } from "../components/UseTranslation";


const Layout = ({ children }) => <div className="layout">{children}</div>

const Header = dynamic(() => import("../components/sections/Header"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  return <Layout>
    <TranslationProvider>
      <Header />
      <Component {...pageProps} />
    </TranslationProvider>
  </Layout>
}

