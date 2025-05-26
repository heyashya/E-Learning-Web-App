import { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container-xxl py-2 mt-4">
      <div className="container">
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s">
          <center>
            <form
              className="shadow p-4"
              style={{ maxWidth: '550px' }}
              onSubmit={handleSubmit}
            >
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-5 bg-white text-center px-3">Signup</h1>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn text-light w-100 py-3" type="submit">
                    Signup
                  </button>
                </div>

                <div className="col-12 text-center">
                  <p>
                    Already have an account?{' '}
                    <a className="text-decoration-none" href="/Login">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Signup;
