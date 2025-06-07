import { createRoot } from 'react-dom/client'
import PageComponent from './page.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <div>
    <ReactFactCard />
    <PageComponent />
  </div>
)

function ReactFactCard() {
  return (
    <>
      <link rel="stylesheet" href="./src/index.css"/>
      <img src="./src/assets/react.svg"/>
        <h1>Fun facts about react</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </>
  )
}
