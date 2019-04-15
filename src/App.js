import React, { Component } from 'react';
import './App.css';
import './Home-style.css';
import './general.css';

import AppTitle from './AppTitle/AppTitle'
import PlanetName from './PlanetName/PlanetName'
import PlanetProp from './PlanetProp/PlanetProp'
import PlanetPropFull from './PlanetPropFull/PlanetPropFull'
import FeaturedOn from './FeaturedOn/FeaturedOn'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            population: '',
            climate: '',
            terrain: '',
            featured: [],
            api_endpoint: 'https://swapi.co/api/planets/'
        }
    }

    componentDidMount() {
        this.initializeData()
        this.findPlanet()
    }

    findPlanet = () => {

        this.initializeData()

        let url = this.state.api_endpoint + (Math.floor(Math.random() * 60)+1) + '/'

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.name === 'unknown') {
                    this.findPlanet()
                    return
                }
                this.setState({
                    name: 'Planet: ' + data.name,
                    population: this.formatPopulation(data.population),
                    climate: data.climate,
                    terrain: data.terrain,
                    featured: []
                })

                this.findFeaturedFilms(data.films)
            })
    }

    findFeaturedFilms = (films) => {

        let fetching = true;

        if (films.length) {
            this.setState(prevState => ({
                featured: [<div key={1}><em>Fetching {films.length} movie(s)...</em></div>]
            }))
            let i;
            for (i = 0; i < films.length; i++) {
                fetch(films[i])
                    .then(response => response.json())
                    .then(data => {
                        if (fetching) {
                            this.setState({
                                featured: []
                            })
                            fetching = false;
                        }
                        let release_year = data.release_date.split('-')[0]
                        let film = data.title + ' (' + data.director + ', ' + release_year + ')'
                        this.setState(prevState => ({
                            featured: [...prevState.featured, <div key={film}>{film}</div>]
                        }))
                    })
            }
        }

        else {
            this.setState(prevState => ({
                featured: [<div key={1}><em>Not featured on any movies</em></div>]
            }))
        }
    }

    formatPopulation = (pop) => {
        pop = Number(pop)
        if (!pop) {return '-'}
        if (pop>=0             && pop<1000000)           {return pop/1000 + 'k'}
        if (pop>=1000000       && pop<1000000000)        {return pop/1000000 + ' mil.'}
        if (pop>=1000000000    && pop<1000000000000)     {return pop/1000000000 + ' bil.'}
        if (pop>=1000000000000 && pop<1000000000000000)  {return pop/1000000000000 + ' tril.'}
    }

    initializeData = () => {
        this.setState({
            name: 'Fetching planet...',
            population: '-',
            climate: '-',
            terrain: '-',
            featured: []
        })
    }

    render() {
        return (
            <div className="App">
                <div id="homecontainer" className="fadeinscalein">

                    <AppTitle/>

                    <div className="home-viewscontainer">

                        <PlanetName message={this.state.name}/>
                        <PlanetProp property={'Population'} value={this.state.population}
                                    icon={'fas fa-users home-viewscontainer-view-icon-relatorios'}/>
                        <PlanetProp property={'Climate'} value={this.state.climate}
                                    icon={'fas fa-cloud home-viewscontainer-view-icon-mapadeconhecimento'}/>
                        <PlanetPropFull property={'Terrain'} value={this.state.terrain}
                                    icon={'fas fa-tint home-viewscontainer-view-icon-terrain'}/>
                        <FeaturedOn featured={this.state.featured}/>

                        <button className="btn btn-primary btn-find-planet" onClick={this.findPlanet}>Find planet!</button>

                    </div>
                </div>
            </div>
        );
    }
}


export default App;
