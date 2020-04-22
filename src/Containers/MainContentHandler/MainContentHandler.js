import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Classes from './MainContentHandler.css';
import OurStory from '../OurStory/OurStory';
import Blog from '../Blog/Blog';
import Forum from '../Forum/Forum';
import Gallery from '../Gallery/Gallery';
import QuoteOfTheWeek from '../QuoteOfTheWeek/QuoteOfTheWeek';

const MainContentHandler = () => (
  <div className={Classes.MainContentHandler}>
    <Switch>
      <Route path="/our-story" component={OurStory} />
      <Route path="/blog" component={Blog} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/quote-of-the-week" component={QuoteOfTheWeek} />
      <Route path="/forum" component={Forum} />
      <Redirect from="/" exact to="/our-story" />
      <Route render={() => <h1>Page Not Found</h1>} />
    </Switch>
  </div>
)

export default MainContentHandler;