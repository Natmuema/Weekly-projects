import List from './components/List.jsx'


function App() {

  const movies = [{id:1, name:"Kung Fu Panda", releaseDate: 2008},
    {id:2, name:"Avatar the Last AirBender", releaseDate: 2005},
    {id:3, name:"Ed Edd and Eddy", releaseDate: 1999},
    {id:4, name:"Codename: Kids Next Door", releaseDate: 2002},
    {id:5, name:"Power Puff Girls", releaseDate:1998},
    {id:6, name:"Dexter's Laboratory", releaseDate: 1995}
];

const books = [{id:7, name:"The Alchemist", releaseDate: 1988},
  {id:8, name:"Atomic Habits", releaseDate: 2018},
  {id:9, name:"The Last Lecture", releaseDate: 2008},
  {id:10, name:"Eat, Pray, Love", releaseDate: 2006},
  {id:11, name:"Man's Search for Meaning", releaseDate:1946},
  {id:12, name:"The Four Agreements", releaseDate: 1997}
];

  return(<>
  {movies.length > 0 && <List items={movies} category="Movies"/>}
  {books.length > 0 && <List items={books} category="Books"/>}
  </>);
}

export default App
