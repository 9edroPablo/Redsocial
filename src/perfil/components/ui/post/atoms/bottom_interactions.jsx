export function PostInteractionBottom({likes,comments}) {
    return (
        <>
            <div className="post_bottom">
                <div className="post_bottom_interactions">
                    <span className="post_interactions_icon"></span>
                    <a href="" className="post_interactions_link">{likes} me gusta</a>
                </div>
                <div className="d-flex-beetween">
                    <div className="post_bottom_interactions">
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link">{comments} Comentarios</a>
                    </div>
                    <div className="post_bottom_interactions">
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link">0 Compartir</a>
                    </div>
                </div>
            </div>
        </>
    );
}