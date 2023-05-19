export default function validate(data) {
    let errors = {};
    let regex = /\S+@\S+\.\S+/;
    let regexPassword = new RegExp("[0-9]");
    if(!regex.test(data.email)) {
        errors.email = "*Debe ingresar un email";
    }
    if(!data.email) {
        errors.email = "*El user no puede estar vacio";
    }
    if (data.email.length > 35) {
        errors.email = "*No puede exceder a 35 caracteres";
    }
    if(!regexPassword.test(data.password)) {
        errors.password = "*La password debe tener al menos un número";
    }
    if(data.password.length < 6 || data.password.length > 10)
    {
        errors.password = "*La password debe tener entre 6 y 10 caracteres";
    }
    return errors;
}