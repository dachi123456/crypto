import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './router/router'

function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(router)}/>
    </div>
  )
}

export default App
