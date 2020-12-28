import '../styles/global.scss'
import ContextWrapper from '../contexts';

export default function App({ Component, pageProps }) {
  return (
      <div>
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
      </div>
    )
}
