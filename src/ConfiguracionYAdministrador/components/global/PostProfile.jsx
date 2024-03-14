export function PostProfile({image,name,date}) {
    return (
        <>
            <div className="post_profile">
                <img className="post_image" src={image} alt="" />
                <div className="username">
                    <h5 className="not-margin"> 
                        {name}
                    </h5>
                    <span className="post_date">
                        {date}
                    </span>
                </div>
            </div>
        </>
    );
}