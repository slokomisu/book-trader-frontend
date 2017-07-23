import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react'

function AllBooksComponent (props) {
  return (
    <Grid.Row>
      <Header>Welcome to the Book Trade Club!</Header>
    </Grid.Row>
  )
}

AllBooksComponent.propTypes = {}
AllBooksComponent.defaultProps = {}

export default AllBooksComponent
