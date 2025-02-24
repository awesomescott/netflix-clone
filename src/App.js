import './App.css';

// Utils
import requests from './requests';

// Components
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import Row from './Row/Row';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
        title="Only on Netflix"
      />

      <Row
        fetchUrl={requests.fetchTrending}
        title="Trending"
      />

			<Row
        fetchUrl={requests.fetchTopRated}
        title="Top Rated"
      />

			<Row
        fetchUrl={requests.fetchActionMovies}
        title="Action Movies"
      />

			<Row
        fetchUrl={requests.fetchComedyMovies}
        title="Comedy Movies"
      />

			<Row
        fetchUrl={requests.fetchHorrorMovies}
        title="Horror Movies"
      />

			<Row
        fetchUrl={requests.fetchRomanceMovies}
        title="Romance Movies"
      />

			<Row
        fetchUrl={requests.fetchDocumentaries}
        title="Documentaries"
      />
    </div>
  );
};

export default App;
