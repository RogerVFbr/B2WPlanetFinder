import React from 'react'

const planetName = (props) => {
    return (
        <div className="home-viewscontainer-view-transition home-viewscontainer-view-rootuser planet">
            <div className="home-viewscontainer-view-icon">
                <i className="fas fa-globe home-viewscontainer-view-icon-database"></i>
            </div>
            <div className="home-viewscontainer-view-title home-viewscontainer-view-title-singleline">{props.message}</div>
        </div>
    )
}

export default planetName