import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react </h2>
            <User name={'shyam'}/>
            <br />
            <UserClass name={'kumar'} location={'bihar'}/>
        </div>
    )
}

export default About