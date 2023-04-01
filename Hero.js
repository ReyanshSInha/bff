import classes from "./Hero.module.css"
import image from "../assets/heroImage.jpg"

const Hero = () => {
    return (
        <div className={classes.Hero}>

            <div className={classes.HeroSection}>
                <div className={classes.HeroSectionOne}>
                    <h1>GET IN TOUCH <br />
                        WITH OUT MENTORS
                    </h1>
                    <button className={classes.RegisterButton}>REGISTER NOW</button>
                </div>
                <div className={classes.HeroSectionTwo}>
                    <img src={image} width="650px" alt="" />
                </div>
            </div>



        </div>
    )
}

export default Hero
