import React from "react"

// import connect for connect it to the store
import { connect } from "react-redux"

// import action
import { getDogData } from "../actions"

// import react player to play the video
import ReactPlayer from "react-player"


const DogImg = props => {
    let string = props.dogImg
    let type = string.substr(string.length - 3)
    console.log(type)

    const handleGetData = e => {
        e.preventDefault()
        props.getDogData()
    }

    return (
        <div>
            <div className="button">
                <button onClick={handleGetData}>Get Random Dog</button>
            </div>

            <div>
                {type === "mp4"
                    ?
                    <ReactPlayer
                        url={props.dogImg}
                        playing
                        loop
                        height="70vh"
                        className="video"
                    />
                    :
                    <img src={props.dogImg} alt="" className="dogImg" />
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dogImg: state.dogImg
    }
}

export default connect(
    mapStateToProps,
    { getDogData }
)(DogImg)