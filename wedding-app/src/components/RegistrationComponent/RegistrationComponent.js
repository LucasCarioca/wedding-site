import './RegistrationComponent.css';


function RegistrationComponent() {
    return (
        <div className="registration--hero">
            <h1 className="registration--title">Registration</h1>
            <input className="registration--input" placeholder="Email"/>
            <input className="registration--input" placeholder="Last Name"/>
            <input className="registration--input" placeholder="Contact Number"/>
            <div className="registration--paragraph">
                <p>I plan on attending the wedding on 8/16/2022</p>
                <input type="checkbox" className="registration--input registration--input__checkbox"/>
            </div>
            <div className="registration--paragraph">
                <p>I opt-in to recieving email notifications</p>
                <input type="checkbox" className="registration--input registration--input__checkbox"/>    
            </div>
            <div className="registration--paragraph">
                <p>I opt-in to recieving sms message notifications</p>
                <input type="checkbox" className="registration--input registration--input__checkbox"/>
            </div>
            <button className="registration--submit">Register</button>
            <div className="registration--hero--blur"></div>
        </div>
    )
}

export default RegistrationComponent;