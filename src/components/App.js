import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <PageLayout   header={<h1>Header</h1>}footer={<footer>Footer</footer>}>
        <main>Main Content</main>
        </PageLayout>
    </div>
  )
}

export default App
