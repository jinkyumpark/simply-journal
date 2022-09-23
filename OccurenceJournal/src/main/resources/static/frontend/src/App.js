// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// css
import './App.css';
// Component
import TopNav from './common/TopNav';
import Main from './Main';
import Introduction from './introduction/Introduction';
import DiaryList from './diary/DiaryList';
import DiaryDetail from './diary/DiaryDetail';
import DiaryWrite from './diary/DiaryWrite';
import SearchResult from './search/SearchResult';
import DiaryEdit from './diary/DiaryEdit';

function App() {
    return (
        <div className='App'>
            <Router>
                <TopNav />

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/introduction' element={<Introduction />} />

                    <Route path='/diary/all' element={<DiaryList />} />
                    <Route path='/diary/:id' element={<DiaryDetail />} />
                    <Route path='/diary/write' element={<DiaryWrite />} />
                    <Route path='/diary/edit/:id' element={<DiaryEdit />} />

                    <Route path='/search/:key' element={<SearchResult />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
