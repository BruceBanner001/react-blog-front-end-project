import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "./StoredData";

const Kollywood = () => {
    const [data] = useContext(store);
    return (
        <div>
            <div className='Header'>Kollywood</div>
            <hr id="harizondal" /><br></br><br></br>
            <div>
                <div className="LeftSide">
                    {
                        data.filter((data) => data.category === "Kollywood").map((data) => (
                            <>
                                <div className="leftSideContent">
                                    <div key={data.id}>
                                        <Link to={`/Kollywood/${data.id}`}>
                                            <img src={data.image} alt='Not Found' className="imageLeftSide" />
                                        </Link>
                                        <div className="leftSideRight">
                                            <div><h3 className="titleLeftSide">{data.title}</h3></div>
                                            <div><p className="descriptionLeftSide">{data.descriptionSmall}</p></div>
                                            <div><p className="categoryLeftSide">{data.category}</p></div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr> <br></br>
                            </>
                        ))
                    }
                </div>
                <div className="RightSide">
                    <div className="Header">Top Posts</div>
                    <hr id="harizondalRight" /><br></br><br></br>
                    {
                        data.filter((data) => data.category === "Kollywood").map((data) => (
                            <>
                                <div className="rightSideContent">
                                    <div key={data.id}>
                                        <Link to={`/Kollywood/${data.id}`}>
                                            <img src={data.image} alt='Not Found' className="imageRightSide" />
                                        </Link>
                                        <div className="rightSideRight">
                                            <div><h3 className="titleRightSide">{data.title}</h3></div>
                                            <div><p>Category:<span className="categoryRightSide">{data.category}</span></p></div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr><br></br>
                            </>
                        ))
                    }
                    <div id="advertisement">Advertisement</div>
                </div>
            </div>
        </div>
    )
}

export default Kollywood;