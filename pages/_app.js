import React from 'react'
// import {Reset} from 'styled-reset'
import App, {Container} from 'next/app'
import {ApolloProvider} from 'react-apollo'
import withApolloClient from '../lib/with-apollo-client'

class BaezikAdmin extends App {
  render() {
    const {Component, pageProps, apolloClient} = this.props
    return (
      <Container>
        {/*<Reset />*/}
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(BaezikAdmin)
