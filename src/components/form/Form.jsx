import React, {useState} from "react";
import styles from "./Form.module.css";
import validate from "./validate";

export default function Form(props){

const [userData, setUserData] = useState({
    email: "",
    password: ""
})
 const [errors, setErrors] = useState({})

const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })
    setErrors(validate({
        ...userData,
        [event.target.name] : event.target.value
    }))
}

const handleSubmit = (event) => {
    event.preventDefault();

    props.login(userData);
}

    return(
        <div className={styles.divForm}>
            <img src="https://elcomercio.pe/resizer/kksTjR_pDD_4a18AkIr5w8hpdUc=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/SLY4F5DK6FDZLF2GN2ZSLLCO7E.jpg" alt="Rick&MortyApp" />
        <form   
        onSubmit={handleSubmit}
        className={styles.formContainer}>
            <label>Email  </label>
            <input 
            name="email"
            onChange={handleChange}
            value={userData.email}
            placeholder="Email..."
            className={styles.inputEmail}
            type="email" 
            autoComplete="off"/>
            <span>{errors.email ? errors.email : <br/>}</span>

            <label>Password</label>
            <input 
            name="password"
            onChange={handleChange}
            value={userData.password}
            placeholder="Password"
             className={styles.inputPassword}
            type="password"/>
            <span>{errors.password ? errors.password : <br/>} </span>

            <button type="submit">Login</button>
        </form>
        </div>
    )
}