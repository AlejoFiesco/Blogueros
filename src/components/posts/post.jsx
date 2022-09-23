import './post.styles.css';

export const Post = () => {

  return (
    <div className="post letra-clara">
          <div className='inner-post'>
            <h2 id="title" className='title'>Title</h2>

            <div className="description">
              <p 
                id="content" 
                className='content'
               /> 
            </div>
            <span> public </span>

            <button type="submit">Post!</button>
          </div>
          <div className="enter-post">
            <i class="fa-solid fa-angle-right"></i>
          </div>
    </div>
  );
}
