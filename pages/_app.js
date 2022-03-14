
import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-kotlin")
require("prismjs/components/prism-csharp")

import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
