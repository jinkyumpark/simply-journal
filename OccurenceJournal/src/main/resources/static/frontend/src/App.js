import './App.css';
import TopNav from './common/TopNav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './introduction/Introduction';
import DiaryView from './diary/DiaryView';
import DiaryWriteView from './diary/DiaryWriteView';
import Main from './Main';

function App() {
    return (
        <div className='App'>
            <Router>
                <TopNav />

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/introduction' element={<Introduction />} />
                    <Route path='/diary/all' element={<DiaryView />} />
                    <Route path='diary/write' element={<DiaryWriteView />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
