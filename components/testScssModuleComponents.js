import cn from 'classnames'
import testScssModulesStyles from '../styles/test.module.scss'

const TestScssModulesDrivenComponent = () => {
  return (
    <>
      <div className={cn(testScssModulesStyles.testClass, testScssModulesStyles.secondTestClass, 'mb-8', 'pb-16')}>
        Just a test
      </div>
    </>
  )
};

export default TestScssModulesDrivenComponent;
