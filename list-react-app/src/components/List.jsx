import PropTypes from 'prop-types';

function List (props) {

    const category = props.category;
    const itemList = props.items;

    /*const movies = [{id:1, name:"Kung Fu Panda", releaseDate: 2008},
        {id:2, name:"Avatar the Last AirBender", releaseDate: 2005},
        {id:3, name:"Ed Edd and Eddy", releaseDate: 1999},
        {id:4, name:"Codename: Kids Next Door", releaseDate: 2002},
        {id:5, name:"Power Puff Girls", releaseDate:1998},
        {id:6, name:"Dexter's Laboratory", releaseDate: 1995}
    ]; */

    //movies.sort((a, b) => a.name.localeCompare(b.name));  //Alphabetical
    //movies.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    //movies.sort((a,b) => a.releaseDate - b.releaseDate);//Numeric Order
    //movies.sort((a,b) => b.releaseDate - a.releaseDate);//Reverse Numeric Order

    //const earlyReleaseYear = movies.filter(movie => movie.releaseDate < 2002);
    //const lateReleaseYear = movies.filter(movie => movie.releaseDate >= 2002);
 

    const listItems = itemList.map(item => <li key={item.id}>
                                              {item.name}: &nbsp;
                                              <b>{item.releaseDate}</b></li>);
    

    return(<> 
    <h3 className="list-category">{category}</h3> 
    <ul className="list-items">{listItems}</ul>
    </>
    );

}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                               name: PropTypes.string,
                                               releaseDate: PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items:[],
}
export default List