import React from 'react'
import { connect } from 'react-redux';
import NavBar from './components/shared/NavBar'
import PageComponent from './containers/PageComponent'
import { Grid, Container } from 'semantic-ui-react';

const App = () =>
  <div>
    <NavBar/>
    <Grid>
      <Container>
        <PageComponent/>
      </Container>
    </Grid>
  </div>

const mapState = ({auth}) => {
  return {
    auth
  }
}

const AppContainer = connect(mapState, null)(App)
export default AppContainer;
