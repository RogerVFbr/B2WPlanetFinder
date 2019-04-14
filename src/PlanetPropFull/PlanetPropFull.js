import React from 'react'

const planetPropFull = (props) => {
    return (
        <div className="home-viewscontainer-view-transition home-viewscontainer-view-rootuser terrain">
            <div className="home-viewscontainer-view-icon-small">
                <i className={props.icon}></i>
            </div>
            <div className="home-viewscontainer-view-title home-viewscontainer-view-title-singleline">{props.property}:</div>
            <div className="home-viewscontainer-view-title home-viewscontainer-view-title-singleline">{props.value}</div>
        </div>
    )
}

export default planetPropFull