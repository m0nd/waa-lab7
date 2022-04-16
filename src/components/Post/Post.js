import './Post.css'

const Post = (props) => {
    
    return (
        <div className='post' onClick={ () => props.setSelectedPost(props.post)}>
            <p>ID: {props.post.id}</p>
            <p>Title: {props.post.title}</p>
            <p>Author: {props.post.author}</p>
            <p>Content: {props.post.content}</p>
        </div>
    )
}

export default Post;