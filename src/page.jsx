function Header() {
    return (
        <header className="header-container">
            <img src='./src/assets/react.svg' alt="React Logo" className="react-logo"/>
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 20xx Neubauer development. All Rights Reserved</small>
        </footer>
    )
}

function PageContent() {
    return (
        <div className="page-content">
            <h1>Why I'm excited to learn React</h1>
            <ol>
                <li>This will enhance my understanding of HTML and CSS</li>
                <li>Open more job opportunities</li>
                <li>Allow me to create a portfolio</li>
                <li>Learn the stack of a company I adore</li>
                <li>Finally get started on my project</li>
            </ol>
        </div>
    )
}

function PageComponent() {
    return (
        <>
            <link rel="stylesheet" href="./src/index.css"/>
            <Header />
            <PageContent />
            <Footer />
        </>
    )
}

export default PageComponent;