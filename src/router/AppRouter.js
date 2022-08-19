import React from 'react';
import { BrowserRouter, Switch, Route ,Redirect} from 'react-router-dom';
import Header from '../Component/Header';
import AddBook from '../Component/AddBook';
import BooksList from '../Component/BooksList';
import useLocalStorage from '../hook/useLocalStorage';
import EditBook from '../Component/EditBook'

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <BooksList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;