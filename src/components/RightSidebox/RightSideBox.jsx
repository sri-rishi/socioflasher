import { Button, SearchBox } from "../index";

export const RightSideBox = () => {
    return (
        <div className="rightside-box flex-column gap-2">
                <SearchBox />
                <div className="follow-box flex-column gap-1">
                    <div className="single-user-box flex-row align-items-center justify-content-between">
                        <div className="flex-row gap-1 align-items-center">
                            <div className="profile-img-sm-box">
                                <img className="round-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                            </div>
                            <div>
                                <p>User Name</p>
                                <small>sub user</small>
                            </div>
                        </div>
                        <Button className="border-none bg-transparent follow-btn" text={"Follow"}/>
                    </div>
                    <div className="single-user-box  flex-row align-items-center justify-content-between">
                        <div className="flex-row gap-1 align-items-center">
                            <div className="profile-img-sm-box">
                                <img className="round-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                            </div>
                            <div>
                                <p>User Name</p>
                                <small>sub user</small>
                            </div>
                        </div>
                        <Button className="border-none bg-transparent follow-btn" text={"Follow"}/>
                    </div>
                </div>
            </div>
    )
}