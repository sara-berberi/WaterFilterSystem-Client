import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChiefMarketingDashboard from '../pages/ChiefMarketingDashboard';

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/dashboard' element={<ChiefMarketingDashboard />}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes;