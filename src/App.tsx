import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Header } from './Header';
import "./App.css";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer feeb78bf5815b585ce2d180338da14e9963c56de`,
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    </ApolloProvider>
  );
};
export default App;
