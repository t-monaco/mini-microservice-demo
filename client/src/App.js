import './App.css';
import PostCreate from './components/post-create/post-create.component';
import PostList from './components/post-list/post-list.component';

function App() {
  return (
    <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <br />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>
  );
}

export default App;
