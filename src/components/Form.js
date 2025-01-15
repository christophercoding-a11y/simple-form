import { useId } from 'react'

const Form =(props)=> {

    const id = useId()

    return (
        <>
            <div className="container">
                <form className="form" onSubmit={props.handleSubmit}>
                    <h2 className="text-center text=capitalize">Enter the information below:</h2>
                    <div className="col-2 mx-auto row">
                        <div className="col-auto">
                            <label 
                                htmlFor={ id + '-firstName'}
                                className="form-label text-capitalize">
                                    first Name
                            </label>
                            <input
                                type="text"
                                id= { id + '-firstName'}
                                name='firstName'
                                value={props.firstName}
                                onChange={props.handleChange}
                                className='form-control'
                                required
                                />
                        </div>
                        <div className="col-auto">
                            <label 
                                htmlFor={ id + '-lastName'}
                                className="form-label text-capitalize">
                                    last Name
                            </label>
                            <input
                                type="text"
                                id= { id + '-lastName'}
                                name='lastName'
                                value={props.lastName}
                                onChange={props.handleChange}
                                className='form-control'
                                required
                                />
                        </div>
                    </div>
                    <div className="col-2 mx-auto row">
                    <div className="col-auto">
                            <label 
                                htmlFor={ id + '-email'}
                                className="form-label text-capitalize">
                                    email
                            </label>
                            <input
                                type="email"
                                id= { id + '-email'}
                                name='email'
                                value={props.email}
                                onChange={props.handleChange}
                                className='form-control'
                                required
                                />
                        </div>
                        <div className="col-auto">
                            <label 
                                htmlFor={ id + '-username'}
                                className="form-label text-capitalize">
                                    username
                            </label>
                            <input
                                type="text"
                                id= { id + '-username'}
                                name='username'
                                value={props.username}
                                onChange={props.handleChange}
                                className='form-control'
                                required
                                />
                        </div>
                        <div className="col-auto">
                            <label 
                                htmlFor={ id + '-dateofbirth'}
                                className="form-label text-capitalize">
                                    date of birth
                            </label>
                            <input
                                type="dateofbirth"
                                id= { id + '-dateofbirth'}
                                name='dateofbirth'
                                value={props.dateofbirth}
                                onChange={props.handleChange}
                                className='form-control'
                                required
                                />
                        </div>
                        <div className="col-auto">
                            <label 
                                htmlFor={ id + '-password'}
                                className="form-label text-capitalize">
                                    password
                            </label>
                            <input
                                type="password"
                                id= { id + '-password'}
                                name='password'
                                value={props.password}
                                onChange={props.handleChange}
                                className='form-control'
                                required
                                />
                        </div>
                        <div className="col-auto">
                            <label 
                                htmlFor={ id + '-phone'}
                                className="form-label text-capitalize">
                                    phone number
                            </label>
                            <input
                                type="tel"
                                id= { id + '-phone'}
                                name='phone'
                                value={props.phone}
                                onChange={props.handleChange}
                                className='form-control'
                                required
                                />
                        </div>
                        <div className='mb-3 py-3'>
                            <button className="btn btn-primary" type="submit">confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form