import '../styles/global.scss'
import ContextWrapper from '../contexts';

export default function App({ Component, pageProps }) {
  return (
      <>
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
      </>
    )
}
