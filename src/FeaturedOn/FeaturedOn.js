import React from 'react'

const featuredOn = (props) => {
    return (
        <div className="home-viewscontainer-view-transition home-viewscontainer-view-rootuser featured-list">
            <div className="home-viewscontainer-view-icon">
                <i className="fas fa-film home-viewscontainer-view-icon-featured"></i>
            </div>
            <div className="home-viewscontainer-view-title home-viewscontainer-view-title-singleline">
                <u>Featured on:</u>

            </div>
            <div className="features-container">
                {props.featured}
            </div>
        </div>
    )
}

export default featuredOn