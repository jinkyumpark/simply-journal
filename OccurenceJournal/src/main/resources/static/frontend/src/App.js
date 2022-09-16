import './App.css';
import TopNav from './common/TopNav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './introduction/Introduction';
import DiaryView from './diary/DiaryView';

function App() {
    return (
        <div className='App'>
            <Router>
                <TopNav />

                <Routes>
                    <Route path='/introduction' element={<Introduction />} />
                    <Route path='/diary/all' element={<DiaryView />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
