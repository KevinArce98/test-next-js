import Link from 'next/link';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/"><a className="navbar-brand">Next.Js App</a></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/users"><a className="nav-link active" aria-current="page">Usuarios</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
