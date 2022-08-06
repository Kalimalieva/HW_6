import React, {useState} from 'react';
import classes from "./FormPage.module.css"

function FormPage(props) {
    const [form, setForm] = useState({
        name: "",
        username: "",
        gender: "",
        status: false
    });

    const changeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!form.name.trim()) {
            alert("Заполните поля Name")
        }
        if (!form.username.trim()) {
            alert("zapolnite polya USERNAME")
        }
        if (!form.gender.trim()) {
            alert("zapolnite polya GENDER")
        }

        return
        console.log(form)
    }


const submit = () => {
    console.log(form)
}

return (
    <div className={classes.container}>
        <h1 className={classes.theme}>регистр пользователя</h1>
        <form onSubmit={onSubmit} className={classes.form}>
            <input type="text"
                   placeholder="name"
                   name="name"
                   onChange={changeInput}
                   className={classes.input}/>
            <input type="text"
                   placeholder="username"
                   name="username"
                   onChange={changeInput}
                   className={classes.input}/>
            <select name="gender" onChange={changeInput} className={classes.input}>
                <option value=""> выберете пол</option>
                <option value="woman">мужчина</option>
                <option value="men">женщина</option>
            </select>
            семейное положение
            <input type="radio"
                   name="status"
                   value="true"
                   onChange={changeInput}
                   className={classes.input}
            />
            <button className={classes.button} onClick={submit}>submit</button>
        </form>
    </div>
)

}

export default FormPage;




