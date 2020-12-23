import OBSContextProvider from './OBSContext';

const ContextWrapper = ({children}) => (
    <OBSContextProvider>
      {children}
    </OBSContextProvider>
)

export default ContextWrapper;
