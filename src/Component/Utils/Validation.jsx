
export const CheckValidData=(email,password)=>{
    


    const isEmailValid= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const isPasswordValid= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)

    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null;




}
