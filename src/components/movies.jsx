import React from 'react';
import {getMovies } from '../services/fakeMovieService';

class Movies extends React.Component {
    state = { 
        movies: getMovies() //temporary
     }
    render() { 
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    
                </table>
            </React.Fragment>
         );
    }
}
 
export default Movies;