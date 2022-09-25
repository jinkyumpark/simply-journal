// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component
import TopNav from './common/TopNav';
import Main from './main/Main';
import Introduction from './introduction/Introduction';
import DiaryList from './diary/DiaryList';
import DiaryDetail from './diary/DiaryDetail';
import DiaryWrite from './diary/DiaryWrite';
import DiaryEdit from './diary/DiaryEdit';
import SearchResult from './search/SearchResult';

function App() {
    return (
        <div className='App'>
            <Router>
                <TopNav />

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/introduction' element={<Introduction />} />

                    <Route path='/diary/list/:method' element={<DiaryList />} />
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
