import React, {useState} from 'react'

//Theres a cypress test file for this in the form\cypress\integration\SimpleFormTest\simpleForm.spec.js

const initalFormValues = {
    name: '',
    email: '',
}

const Data = [{
    name: 'Timmy Turner',
    email: 'timmyturner@wish.com'
}, {
    name: 'Patrick Star',
    email: 'patrickStar@starfish.com'
}]

const SimpleForm = () => {
    const [users, setUsers] = useState(Data)
    const [formValues, setFormValues] = useState(initalFormValues)

    //We are always gonna have a onchange handler you can call it anything as well!
    const onChange = (evt) => {
        //This is where we connect what ever we type in the input to our state
        //The { name, value } are common so remember it!
        //We set { name, value } to are 'target' which is basically our inputs (if i fill out email input it focuses on email input)
        const {name, value} = evt.target
        //Here We set the form values to keep all the data it has plus add in our new one with there values
        setFormValues({...formValues, [name]: value})
    }

    //We are also always gonna have a onSubmit handler you can also call this anything!
    const onSubmit = (evt) => {
        //preventDefault() stops the button from automatically refreshing the page!
        evt.preventDefault()

        //Here we create a new user so what ever we typed gets add to state
        //This means our newuser is basically a add-on to our user list along with its values in form
        const newUser = [...users, formValues]
        //We are adding our new user to state here
        setUsers(newUser)
        //This resets the page
        setFormValues(initalFormValues)
    }

    return (
        <div>
            <h1>Simple Form Example:</h1>
            {/*We call our onSubmit handler here at form tag */}
            <form onSubmit={onSubmit}>
                <label>
                    {/*By default all our inputs should always have there type and name filled out first! */}
                    Name: <input value={formValues.name} type="text" name="name" placeholder='Enter Name'
                                 onChange={onChange}/>
                </label>

                <br/>

                <label>
                    {/*You get the values from state! */}
                    Email: <input value={formValues.email} type="email" name="email" placeholder="Enter Email"
                                  onChange={onChange}/>  {/*As you can see we call our onChange arrow function down here! */}
                </label>

                <br/>

                <button id='simple-submit'>Submit</button>
            </form>

            <div>
                {
                    users.map(person => {
                        return (
                            <div key={person.email}>
                                <h2>{person.name}</h2>
                                <h2>{person.email}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default SimpleForm