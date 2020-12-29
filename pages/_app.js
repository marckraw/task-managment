import '../styles/global.scss'
import ContextWrapper from '../contexts';

export default function App({ Component, pageProps }) {
  return (
      <div className="h-screen w-screen bg-blue-50 dark:bg-gray-500">
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
      </div>
    )
}
