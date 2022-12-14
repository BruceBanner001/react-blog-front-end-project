import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "./StoredData";

const Hollywood = () => {
    const [data] = useContext(store);
    return (
        <div>
            <div className='Header'>Hollywood</div>
            <hr id="harizondal" /><br></br><br></br>
            <div>
                <div className="LeftSide">
                    {
                        data.filter((data) => data.category === "Hollywood").map((data) => (
                            <>
                                <div className="leftSideContent">
                                    <div key={data.id}>
                                        <Link to={`/Hollywood/${data.id}`}>
                                            <img src={data.image} alt=' ' className="imageLeftSide" />
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
                        data.filter((data) => data.category === "Hollywood").map((data) => (
                            <>
                                <div className="rightSideContent">
                                    <div key={data.id}>
                                        <Link to={`/Hollywood/${data.id}`}>
                                            <img src={data.image} alt='' className="imageRightSide" />
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

export default Hollywood;