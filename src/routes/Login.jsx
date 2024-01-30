export const Login = () => {



    return (
        <div>
            <h1>SISMED</h1>

            <h2>Sistema de gestión de citas médicas</h2>

            <form className="container">
                <div className="container">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" id="exampleInputEmail1" placeholder="Ingresa tu email" />
                </div>
                <div className="container">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>

        </div>
    )
}
