function Header() {
    return (
        <header>
            <img src='./src/assets/react.svg' alt="React Logo"/>
        </header>
    )
}

function PageComponent() {
    return (
        <>
            <link rel="stylesheet" href="./src/index.css"/>
            <Header/>
            <div>
                <h1>Why I'm excited to learn React</h1>
                <ol>
                    <li>This will enhance my understanding of HTML and CSS</li>
                    <li>Open more job opportunities</li>
                    <li>Allow me to create a portfolio</li>
                    <li>Learn the stack of a company I adore</li>
                    <li>Finally get started on my project</li>
                </ol>
            </div>
            <footer>
                <small>© 20xx Neubauer development. All Rights Reserved</small>
            </footer>
        </>
    )
}

export default PageComponent;