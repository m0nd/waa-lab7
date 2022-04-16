import Posts from "../Posts/Posts";
import { useState } from 'react';
import './Dashboard.css'
import PostDetails from "../../PostDetails/PostDetails";

const Dashboard = () => {
    const [posts, setPosts]  = useState(
        [
            {id: 111, title: 'Happiness', author: 'John', content: 'Happiness is always inside you'},
            {id: 112, title: 'MIU', author: 'Dean', content: 'MIU is an interesting university'},
            {id: 113, title: 'Enjoy Life', author: 'Jasmine', content: 'Enjoy life cause you only get one'}
        ]
    );

    const [selectedPost, setSelectedPost] = useState(null);

    const updateTitle = (event) => {
        event.preventDefault();
        const postsCopy = [...posts];
        postsCopy[0].title = event.target[0].value;
        setPosts(postsCopy);
    }


    return (
        <div>
            <h2>Dashboard</h2>
            <div className="dash">
                <Posts posts={posts} setSelectedPost={setSelectedPost} />
            </div>
            <div>
                <h3>Update first component's title</h3>
                <form onSubmit={updateTitle}>
                    <input type="text" placeholder="Type new title here" /> 
                    <button type="submit">Update Title</button>
                </form>
            </div>
            { selectedPost !== null && <PostDetails selectedPost={selectedPost} /> }
            
        </div>
    )
}

export default Dashboard;