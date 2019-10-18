import React, { Component } from 'react'
import Draggable from 'react-draggable'

import './Finder.scss';
import FinderTopBar from './FinderTopBar/FinderTopBar';
import HomeWindow from '../../Windows/Home/HomeWindow';

class Finder extends Component {



    state = {
        windowHistory: ['home'],
        show: true,
    }



    closeWindowHandler = () => this.setState({show: false})
    

    render () {

        const getFinderTitle = () => {
            switch (this.state.windowHistory[0]) {
                case('home'): return 'Welcome';
                default : return 'Ryan Holstein';
            } 
        }


        const getFinderContent = () => {
            switch (this.state.windowHistory[0]) {
                case('home'): return <HomeWindow />;
                default : return null;
            } 
        }

        return (
            <Draggable >
                <div className={`finder-window finder ${this.state.show ? '' : 'hide'}` } >
                    <FinderTopBar 
                    close={ () => this.closeWindowHandler() } 
                    title={getFinderTitle()}/>
                    <div className='finder__content'>
                        {getFinderContent()}
                    </div>
                </div>
            </Draggable>
        
        )
    }




}


export default Finder;