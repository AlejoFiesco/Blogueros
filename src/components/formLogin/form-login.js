export default function FormLogIn() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputName">Email</label>
        <input
          type="text"
          className="input-control"
          id="inputName"
          aria-describedby="TeHelp"
          placeholder="Your Name ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="input-control"
          id="inputPassword"
          placeholder="Your password ..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
  );
}
