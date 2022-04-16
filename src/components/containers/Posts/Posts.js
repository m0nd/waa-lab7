import Post from "../../Post/Post"

const Posts = (props) => {
    const postComponents = props.posts.map(post => {
        return <Post 
            key={post.id} 
            post={post}
            setSelectedPost={props.setSelectedPost} />
    })
    
    return postComponents;
}

export default Posts;