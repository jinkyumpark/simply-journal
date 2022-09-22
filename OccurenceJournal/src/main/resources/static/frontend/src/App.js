// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// css
import './App.css';
// Component
import TopNav from './common/TopNav';
import Main from './Main';
import Introduction from './introduction/Introduction';
import DiaryListView from './diary/DiaryListView';
import DiaryDetailView from './diary/DiaryDetailView';
import DiaryWriteView from './diary/DiaryWriteView';
import SearchResultView from './search/SearchResultView';

function App() {
    return (
        <div className='App'>
            <Router>
                <TopNav />

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/introduction' element={<Introduction />} />

                    <Route path='/diary/:id' element={<DiaryDetailView />} />
                    <Route path='/diary/all' element={<DiaryListView />} />
                    <Route path='/diary/write' element={<DiaryWriteView />} />

                    <Route path='/search/:key' element={<SearchResultView />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
