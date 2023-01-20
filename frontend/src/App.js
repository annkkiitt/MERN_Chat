import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { ChatPage } from './Pages/ChatPage';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/chats">
              <ChatPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
