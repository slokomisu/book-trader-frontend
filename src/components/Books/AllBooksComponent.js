import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Image } from 'semantic-ui-react'
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux';

class AllBooksComponent extends Component {



  render () {

    const childElement = this.props.books.map(book => {
      return (
        <Image src={book.coverImage} />
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
          <Masonry options={{columnWidth: 200}}>
            {/*<Image.Group>*/}
              {childElement}
            {/*</Image.Group>*/}
          </Masonry>
        </Grid.Row>

      </Grid.Row>
    )
  }
}

AllBooksComponent.propTypes = {}
AllBooksComponent.defaultProps = {}

const mapState = ({books: {bookList}}) => {
  return {
    books: bookList
  }
}

export default connect(mapState)(AllBooksComponent);
