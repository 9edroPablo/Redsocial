import './feed.css';
import {Post} from "../../components/ui/post/post";
import { feed } from '../../utils/feed';

export function Feed() {
    return (
        <>
            <div className="feed">
                {
                    feed.map((post,index) => (
                        <Post key={index} /> 
                    ))
                }
                
            </div>
           
        </>
    );
}