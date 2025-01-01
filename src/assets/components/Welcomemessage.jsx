const Welcomemessage = ({onGetPostsClick}) =>{
    return (
    <center className="wm">
    <h1 >There are no posts</h1>
    <button type="button" 
    onClick={onGetPostsClick}
    class="btn btn-primary">Get Post from Server</button>
    </center>
    );
}

export default Welcomemessage;