import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const GET_POSTS = gql`
  {
    posts {
      id
      title
      slug
      content
      type
    }
  }
`

const GraphQLTest = () => (
  <Query query={GET_POSTS}>
    {({loading, error, data: {posts}}) => {
      if (loading) return <p>CARREGANDO...</p>
      if (error) return <p>Deu merda</p>

      return posts.map(item => <p key={item.id}>{item.title}</p>)
    }}
  </Query>
)

export default GraphQLTest
