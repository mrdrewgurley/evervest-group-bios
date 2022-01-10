import tw, { GlobalStyles as BaseStyles, css, theme } from 'twin.macro'

import { Global } from '@emotion/react'

const customStyles = css`
  body {
    -webkit-print-color-adjust: exact;
    background: linear-gradient(135deg, ${theme`colors.gray.100`}, ${theme`colors.gray.100`} 45%, ${theme`colors.secondary`} 45%, ${theme`colors.secondary`});
    font-family: 'Roboto', sans-serif;
    ${tw`antialiased text-gray-800 transition-all`}
  }

  @media print {
    @page {
      margin: auto 0;
    }
    body {
      zoom: 0.97 !important;
    }
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
