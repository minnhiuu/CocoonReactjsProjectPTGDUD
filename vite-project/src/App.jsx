import './App.css'
import useRouteElements from './routes/useRouteElements'
function App() {

  const element = useRouteElements();

  return (
    <>
      {element}
    </>
  )
}

export default App
