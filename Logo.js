import classes from "./Logo.module.css"
import LogoImage from "../assets/online-lesson.png"

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <div className={classes.LogoImage}>
                <img src={LogoImage} width="40px" alt="" />
            </div>
            <div className={classes.LogoText}>MENTOR.ME</div>
        </div>
    )
}

export default Logo
