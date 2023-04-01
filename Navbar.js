import classes from "./Navbar.module.css"
import Logo from "./Logo"

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.NavContent}>
                <div className={classes.Logo}>{<Logo/>}</div>
                <div className={classes.NavButtons}>
                    <div className={classes.Home}>Home</div>
                    <div className={classes.Buttons}>Our Mentors</div>
                    <div className={classes.Buttons}>Become a Mentor</div>
                    <div className={classes.Login}>Login/Register</div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
