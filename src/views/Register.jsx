const Register = () => {
  return (
    <>
          <form action="">
              <label htmlFor="">
                  Name
                  <input type="text" />
              </label>
              <label htmlFor="">
                  Email
                  <input type="email" />
              </label>
              <label htmlFor="">
                  Password
                  <input type="password" />
              </label>
              <button type="submit">Registration</button>
        </form>
    </>
  );
};

export default Register;