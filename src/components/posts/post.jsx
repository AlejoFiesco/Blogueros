import './post.styles.css';

export const Post = ( props ) => {
  
  const { title, content, visibility, comments, date, userTag } = props.post;
  const showVisibility = () =>{
    switch ( visibility ) {
      case 'friends':
        return <i className="fa-solid fa-user-group"></i>
      case 'private':
        return <i className="fa-solid fa-lock"></i>
      default:
        return <i className="fa-solid fa-globe"></i>
    }
  };

  return (
    <div className="post letra-clara">
          <div className='inner-post'>
            <div className="post-header">
              <h4>{ title }</h4>
              <h4>@{ userTag }</h4>
            </div>

            <div className="description">
              <p id="content" className='content'> { content }  </p>
            </div>

            <div className="post-footer">
              <span> { showVisibility() } </span>
              <span> { date } </span>
              <span> { comments } comments </span>
            </div>
          </div>
          <div className="enter-post">
            <i className="fa-solid fa-angle-right"></i>
          </div>
    </div>
  );
}
