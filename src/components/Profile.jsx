import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"></img>
            </div>
            <div className={classes.item}>
                ava + description
            </div>
            <div className={classes.item}>
                My posts
                <div className={classes.item}>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;