import { Button, SearchBox } from "../index";

export const RightSideBox = () => {
    return (
        <div className="">
                <SearchBox />
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                            </div>
                            <div>
                                <p>User Name</p>
                                <small>sub user</small>
                            </div>
                        </div>
                        <Button className="" text={"Follow"}/>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="">
                                <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                            </div>
                            <div>
                                <p>User Name</p>
                                <small>sub user</small>
                            </div>
                        </div>
                        <Button className="" text={"Follow"}/>
                    </div>
                </div>
            </div>
    )
}