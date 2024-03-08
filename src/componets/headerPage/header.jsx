import "./header.css"

export default function App() {
    return (
        <>
            <nav>
                <a href="#"><img src="https://omex.netlify.app/home-1/img/logo.png" alt="" /></a>
                <ul>
                    <li> <a href="#" className="header-link"> Homepage </a> </li>
                    <li> <a href="#" className="header-link"> Pages </a> </li>
                    <li> <a href="#" className="header-link"> Contact us </a> </li>
                    <li> <a href="#" > <button>Get Started</button> </a> </li>
                </ul>
            </nav>
            <div className="clearfix"></div>
        </>
    )
}
