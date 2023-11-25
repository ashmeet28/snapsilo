import './SignInScene.scss';

function SignInScene() {
    function handleSignIn(e) {
        e.preventDefault();
        var formD = new FormData(e.target);
        console.log(formD.get('username'))
    }


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
            <button>Go Back</button>
            <p>Note: This is a demo website.</p>
        </div>
    )
}

export default SignInScene