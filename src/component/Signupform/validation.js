const Validation = (value)=> {
    let errors = {};
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!value.name) {
        errors.name = "Name is empty"
    } else if (value.name.length < 3) {
        errors.name = "Enter Valid Name"
    }

    if(!value.email) {
        errors.email = "Email is empty"
    } else if (!re.test(value.email)) {
        errors.email = "Enter Valid Email"
    }

    if(!value.password) {
        errors.password = "Password is empty"
    } else if (value.password.length < 3) {
        errors.password = "enter a valid password"
    }

    return errors;

}

export default Validation;