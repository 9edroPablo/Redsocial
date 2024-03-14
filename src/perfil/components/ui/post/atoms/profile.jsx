export function PostProfile({userImage,username,date}) {
    return (
        <>
            <div className="post_profile">
                    <img className="post_image" src={userImage} alt="" />
                    <div className="username">
                        <h5 className="not-margin post-username"> 
                            {username}
                        </h5>
                        <span className="post_date">
                            {date}
                        </span>
                    </div>
                </div>
        </>
    );
}