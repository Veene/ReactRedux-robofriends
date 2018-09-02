import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
// import { robots } from './robots';
import SearchBox from './components/SearchBox';
import './containers/App.css';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';

import { setSearchField, requestRobots } from './actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {     //just have to get used to syntax
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}  

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         // searchfield: ''
    //     }
    // }

    componentDidMount() {
        console.log(this.props.store)
        this.props.onRequestRobots();
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users}))

    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }
    render() {
        //if theres no input, filter brings in everything to filteredRobots
        // const { robots } = this.state;
        const { searchField, onSearchChange, robots, isPending} = this.props;
            const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
        if (isPending) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange = {this.props.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div> 
       )
        }
    }
} 
    
        
    


export default connect(mapStateToProps, mapDispatchToProps)(App); //connect() is  ahigher order function. Returns another function returned function will run with (App)