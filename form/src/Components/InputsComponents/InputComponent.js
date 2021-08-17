import React, {useState} from 'react'

const initalState = {
    name: '',
    email: '',
    skill: '',
    console: '',
    favfood: '',
    password: '',
}
const Data = [{
    name: 'Eric Cartman',
    email: 'eric.cartman@gmail.com',
    skill: 'Rage',
    console: 'PlayStation',
    favfood: 'Pizza',
    password: 'earicIsKewl',
}, {
    name: 'OMi',
    email: 'omi@space.com',
    skill: 'Lazy',
    console: 'PC',
    favfood: 'Pizza',
    password: 'Space18'
}]

const Inputs = () => {
    const [userInput, setUserInput] = useState(initalState)
    const [userList, setUserList] = useState(Data)

    const onChange = (evt) => {

        const {name, value} = evt.target

        setUserInput({...userInput, [name]: value})
    }

    const onSubmit = (evt) => {
        evt.preventDefault()

        const newUser = [...userList, userInput]
        setUserList(newUser)

        setUserInput(initalState)
    }

    console.log(userInput)
    console.log(userList)

    return (
        <div onSubmit={onSubmit}>
            <h1>Input Examples!</h1>
            <div>
                <form>
                    <h2>Text Input</h2>
                    <label>
                        Name: <input type="text" name="name" placeholder="Enter Your Name" onChange={onChange}
                                     value={userInput.name}/>
                    </label>

                    <h2>Email Input</h2>
                    <label>
                        Email: <input type="email" name="email" placeholder="Enter Your Email" onChange={onChange}
                                      value={userInput.email}/>
                    </label>

                    <h2>Select</h2>
                    <label>
                        Select Your Skill:
                        <select name="skill">
                            <option value="select">Select</option>
                            <option value='rage'>Rage</option>
                            <option value="lazy">Lazy</option>
                            <option value="smart">Smart</option>
                            <option value="creative">Creative</option>
                        </select>
                    </label>

                    <h2>Check Box</h2>
                    <label>
                        Xbox <input type='checkbox' name='xbox'/>
                    </label>

                    <label>
                        PlayStation <input type='checkbox' name='sony'/>
                    </label>

                    <label>
                        PC <input type='checkbox' name='pc'/>
                    </label>

                    <label>
                        Nintendo <input type='checkbox' name='nintendo'/>
                    </label>

                    <h2>PassWord</h2>
                    <label>
                        Password: <input type="password" name='password' placeholder='Enter Password'/>
                    </label>

                    <h2>Radio Inputs</h2>
                    <div>
                        <label>
                            Pizza <input type='radio' name='favfood'/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Hotdogs <input type='radio' name='favfood'/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Hamburger <input type='radio' name='favfood'/>
                        </label>
                    </div>

                    <div>
                        <label>
                            Tacos <input type='radio' name='favfood'/>
                        </label>
                    </div>

                    <br/>

                    <button id='inputsBTN'>Submit</button>

                </form>
            </div>

            <div>
                <h2>User Information</h2>
                {
                    userList.map(user => {
                        return (
                            <div key={user.email}>
                                <h2>User Name: {user.name}</h2>
                                <h3>User Email: {user.email}</h3>
                                <p>Skill: {user.skill}</p>
                                <p>Console: {user.console}</p>
                                <p>Favorite Food: {user.favfood}</p>
                                <p>Password: {user.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Inputs

