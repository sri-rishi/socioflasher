import { Button } from "../index/index";
import { BiDotsHorizontalRounded, BsHeart, FaRegComment, IoPaperPlaneOutline, BiBookmark, GrEmoji} from "../../assests";

export const FeedSection = () => {
    return (
        <div className="">
            <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                    </div>
                    <p>User Name</p>
                </div>
                <Button className="" icon={<BiDotsHorizontalRounded />}/>
            </div>
            <div>
                <img src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/129769-yuqlzyfues-1572018523.jpg" alt="feed-cover" />
            </div>
            <div className="">
                <div className="">
                    <Button className="" icon={<BsHeart />} />
                    <Button className="" icon={<FaRegComment />} />
                    <Button className="" icon={<IoPaperPlaneOutline />} />
                </div>
                <Button className="" icon={<BiBookmark />}/>
            </div>
            <div className="">
                <p className="">
                    <strong>User Name</strong> 
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi repellat sunt eius aspernatur autem! Assumenda, aliquam corporis sunt pariatur voluptatibus placeat cumque dolorum enim eos nulla adipisci rerum ipsum.
                    </span>
                </p>
                <p>View all comments</p>
            </div>
            <div className="">
                <Button className="" icon={<GrEmoji />}/>
                <input className=""/>
                <Button className="" text={"Post"}/>
            </div>
            
        </div>
        </div>
    )
}