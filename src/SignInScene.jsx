import { useState } from 'react';
import './SignInScene.scss';
import LoaderDiv from './LoaderDiv';

function SignInScene({ onSignIn }) {
    const [isLoading, setIsLoading] = useState(false);

    function handleSignIn(e) {
        e.preventDefault();
        var formD = new FormData(e.target);
        console.log(formD.get('username'))
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000)
    }

    if (isLoading) {
        return <LoaderDiv />
    } else {
        return (
            <div id='signinscene'>
                <h1>Snap Silo</h1>
                <div>
                    <form onSubmit={(e) => handleSignIn(e)}>
                        <label htmlFor="usernameinput">Username</label><br></br>
                        <input type="text" id='usernameinput' autoCapitalize='off' name='username' required /><br></br>

                        <label htmlFor="passwordinput">Password</label><br></br>
                        <input type="password" id='passwordinput' autoCapitalize='off' name='userpassword' required /><br></br>

                        <input type="submit" value="Sign in" />
                    </form>
                </div>
                <button>Create an account</button>
                <p>Note: This is a demo website.</p>
            </div>
        )
    }
}

export default SignInScene