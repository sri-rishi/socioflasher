import { Button } from "../index";
import { BiDotsHorizontalRounded, BsHeart, FaRegComment, IoPaperPlaneOutline, BiBookmark, GrEmoji} from "../../assests";

export const FeedPostBox = () => {
    return (
        <div className="feed-section">
            <div className="feed-post-box">
            <div className="post-header flex-row justify-content-between align-items-center">
                <div className="flex-row align-items-center gap-1">
                    <div className="profile-img-sm-box">
                        <img className="round-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                    </div>
                    <p>User Name</p>
                </div>
                <Button className="dots-btn border-none" icon={<BiDotsHorizontalRounded />}/>
            </div>
            <div>
                <img src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/129769-yuqlzyfues-1572018523.jpg" alt="feed-cover" />
            </div>
            <div className="feed-cta-section flex-row align-items-center justify-content-between">
                <div className="flex-row align-items-center gap-10-px">
                    <Button className="feed-cta-btn border-none bg-transparent" icon={<BsHeart />} />
                    <Button className="feed-cta-btn border-none bg-transparent" icon={<FaRegComment />} />
                    <Button className="feed-cta-btn border-none bg-transparent" icon={<IoPaperPlaneOutline />} />
                </div>
                <Button className="feed-cta-btn border-none bg-transparent" icon={<BiBookmark />}/>
            </div>
            <div className="feed-detail">
                <p className="post-desc">
                    <strong>User Name</strong> 
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi repellat sunt eius aspernatur autem! Assumenda, aliquam corporis sunt pariatur voluptatibus placeat cumque dolorum enim eos nulla adipisci rerum ipsum.
                    </span>
                </p>
                <p>View all comments</p>
            </div>
            <div className="feed-comment-box flex-row align-items-center justify-content-center gap-10-px">
                <Button className="feed-cta-btn border-none bg-transparent" icon={<GrEmoji />}/>
                <input className="feed-comment-input bg-transparent border-none"/>
                <Button className="border-none bg-transparent" text={"Post"}/>
            </div>
            
        </div>
        <div className="feed-post-box">
            <div className="post-header flex-row justify-content-between align-items-center">
                <div className="flex-row align-items-center gap-1">
                    <div className="profile-img-sm-box">
                        <img className="round-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                    </div>
                    <p>User Name</p>
                </div>
                <Button className="dots-btn border-none" icon={<BiDotsHorizontalRounded />}/>
            </div>
            <div>
                <img src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/129769-yuqlzyfues-1572018523.jpg" alt="feed-cover" />
            </div>
            <div className="feed-cta-section flex-row align-items-center justify-content-between">
                <div className="flex-row align-items-center gap-10-px">
                    <Button className="feed-cta-btn border-none bg-transparent" icon={<BsHeart />} />
                    <Button className="feed-cta-btn border-none bg-transparent" icon={<FaRegComment />} />
                    <Button className="feed-cta-btn border-none bg-transparent" icon={<IoPaperPlaneOutline />} />
                </div>
                <Button className="feed-cta-btn border-none bg-transparent" icon={<BiBookmark />}/>
            </div>
            <div className="feed-detail">
                <p className="post-desc">
                    <strong>User Name</strong> 
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi repellat sunt eius aspernatur autem! Assumenda, aliquam corporis sunt pariatur voluptatibus placeat cumque dolorum enim eos nulla adipisci rerum ipsum.
                    </span>
                </p>
                <p>View all comments</p>
            </div>
            <div className="feed-comment-box flex-row align-items-center justify-content-center gap-10-px">
                <Button className="feed-cta-btn border-none bg-transparent" icon={<GrEmoji />}/>
                <input className="feed-comment-input bg-transparent border-none"/>
                <Button className="border-none bg-transparent" text={"Post"}/>
            </div>
            
        </div>
        </div>
    )
}