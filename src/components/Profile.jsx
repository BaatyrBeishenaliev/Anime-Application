import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=0f351e987db9f8881f6a7be3bf54eca26d3d9036-4012775-images-thumbs&n=13'></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;