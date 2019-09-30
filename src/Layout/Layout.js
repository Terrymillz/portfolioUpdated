import React from 'react'
import {Route, withRouter} from 'react-router-dom';
import './Layout.scss';
import Home from '../Containers/Home/Home';
import Projects from '../Containers/Projects/Projects';
import AboutMe from '../Containers/AboutMe/AboutMe';
import Contact from '../Containers/Contact/Contact';
import Project from '../Containers/Projects/Project/Project';

import noiseFilter from '../Assets/Effects/noise.png';

const Layout = props => {

    const style = {backgroundImage: `url(${noiseFilter})`}
    return (
        <div className='page__layout' style={style}>
            <Route path='/' exact component={Home} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/projects/:id' exact component={Project} />
            <Route path='/about' component={AboutMe} />
            <Route path='/contact' component={Contact} />
        </div>
    )
}

export default withRouter(Layout);