import React from 'react'

const Inputs = () => {
    return (
        <div>
            <h1>Input Examples!</h1>
            <div>
                <form>
                    <h2>Text Input</h2>
                    <label>
                        Name: <input type="text" name="name" placeholder="Enter Your Name"/>
                    </label>

                    <h2>Email Input</h2>
                    <label>
                        Email: <input type="email" name="email" placeholder="Enter Your Email"/>
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
        </div>
    )
}

export default Inputs

