import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Classes from './MainContentHandler.css';
import OurStory from '../OurStory/OurStory';
import Blog from '../Blog/Blog';
import Forum from '../Forum/Forum';
import Gallery from '../Gallery/Gallery';
import QuoteOfTheWeek from '../QuoteOfTheWeek/QuoteOfTheWeek';

const MainContentHandler = (props) => (
  <div className={Classes.MainContentHandler}>
    <TransitionGroup className={Classes.transitionGroup}>
      <CSSTransition
        key={props.location.key}
        timeout={1000}
        mountOnEnter unmountOnExit
        classNames={{
          enter: Classes.Enter,
          enterActive: Classes.EnterActive,
          exit: Classes.Exit,
          exitActive: Classes.ExitActive
        }}
      >
        <section className={Classes.routeSection}>
          <Switch location={props.location}>
            <Route path="/our-story" component={OurStory} />
            <Route path="/blog" component={Blog} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/quote-of-the-week" component={QuoteOfTheWeek} />
            <Route path="/forum" component={Forum} />
            <Redirect from="/" exact to="/our-story" />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default MainContentHandler;