import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Container } from 'reactstrap';

import OurStory from '../OurStory/OurStory';
import Blog from '../Blog/Blog';
import Forum from '../Forum/Forum';
import Gallery from '../Gallery/Gallery';
import QuoteOfTheWeek from '../QuoteOfTheWeek/QuoteOfTheWeek';
import { Container } from 'reactstrap';

const MainContentHandler = (props) => (
  <Container>
<<<<<<< Updated upstream
    <TransitionGroup>
=======
    <TransitionGroup className={Classes.transitionGroup}>
>>>>>>> Stashed changes
      <CSSTransition
        key={props.location.key}
        timeout={1000}
        mountOnEnter unmountOnExit
        classNames={{
          enter: { opacity: 0.01 },
          enterActive: { opacity: 1, transition: "opacity 1000ms ease-in" },
          exit: { opacity: 1 },
          exitActive: { opacity: 0.01, transition: "opacity 1000ms ease-in" }
        }}
      >
        <section>
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
  </Container>
)

export default MainContentHandler;