import { Router, BrowserRoute as Router, Routes } from 'react-router-dom';

const app = () => {
    return (
        <main className="bg-slate-300/20">
            <Router>
                Navbar
                <Routes>
                    <Route path="/" element={'Home'} />
                    <Route path="/about" element={'About'} />
                </Routes>

            </Router>


        </main>
    )
}

export default app