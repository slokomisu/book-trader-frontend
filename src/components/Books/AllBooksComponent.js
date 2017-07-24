import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Image, Loader } from 'semantic-ui-react'
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux';

class AllBooksComponent extends Component {



  render () {
    const { isFetching, books } = this.props;

    const childElement = books.map(book => {
      return (
        <Image key={book._id} src={book.coverImage} />
      )
    })

    return (
      <Grid.Row>
        <Grid.Column>
          <Header textAlign="center" size="huge">
            Welcome to the Book Trade Club!
            <Header.Subheader>Check out the collections of your fellow bookworms
              and trade with them.</Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Row>
          {isFetching && <Loader active/>}
          {!isFetching &&
           <Masonry options={{columnWidth: 200}}>
              {childElement}
          </Masonry>}
        </Grid.Row>

      </Grid.Row>
    )
  }
}

AllBooksComponent.propTypes = {}
AllBooksComponent.defaultProps = {}

const mapState = ({books: {bookList, isFetching}}) => {
  return {
    books: bookList,
    isFetching
  }
}

export default connect(mapState)(AllBooksComponent);
