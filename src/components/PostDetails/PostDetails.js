import './PostDetails.css'

const PostDetails = ({selectedPost}) => {

    return (
        <div className="postDetails">
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.author}</p>
            <p>Content...</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default PostDetails;