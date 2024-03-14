import './post.css';
import { PostProfile } from './atoms/profile';
import { postImages } from '../../../utils/post_image';
import { PostContent } from './atoms/content';
import { PostInteractions } from './atoms/interactions';
import { PostInteractionBottom } from './atoms/bottom_interactions';
export function Post() {
    return (
        <>
            <div className="post_divider">
                <article className="post">
                    <PostProfile 
                        key="post_profile"
                        userImage={postImages.user_image}
                        username="Jesus Gonzalez"
                        date="4 horas"
                    ></PostProfile>
                    <PostContent 
                        content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" 
                        banner={postImages.banner}
                    />
                    <PostInteractions likes="45" comments="35" />
                </article>
                <PostInteractionBottom likes="45" comments="35"/>
            </div>
        </>
    );
}