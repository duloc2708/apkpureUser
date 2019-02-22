import Layout from 'modules/Layout/Layout.js'

const Post = (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await axios(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.data
    return { show }
  }

export default Post
