import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react'

function AllBooksComponent (props) {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header textAlign="center" size="huge">
          Welcome to the Book Trade Club!
          <Header.Subheader>Check out the collections of your fellow bookworms and trade with them.</Header.Subheader>
        </Header>
      </Grid.Column>

    </Grid.Row>
  )
}

AllBooksComponent.propTypes = {}
AllBooksComponent.defaultProps = {}

export default AllBooksComponent
