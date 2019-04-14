import React from 'react'

const planetProp = (props) => {
    return (
        <div className="home-viewscontainer-view-transition home-viewscontainer-view-rootuser">
            <div className="home-viewscontainer-view-icon-small">
                <i className={props.icon}></i>
            </div>
            <div className="home-viewscontainer-view-title home-viewscontainer-view-title-singleline">{props.property}:</div>
            <div className="home-viewscontainer-view-title home-viewscontainer-view-title-singleline">{props.value}</div>
        </div>
    )
}

export default planetProp