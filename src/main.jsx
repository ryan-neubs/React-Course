import { createRoot } from 'react-dom/client'
import PageComponent from './page.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <div>
    <PageComponent />
  </div>
)
