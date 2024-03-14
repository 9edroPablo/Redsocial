export function PostContent({content,banner}) {
    return (
        <>
            <div className="post-description">
                <p className='post-text'>
                    {content}
                </p>
            </div>
            <div className="post_banner">
                <img className="post_thumbnail" src={banner} alt="" />
            </div>
        </>
    );
}