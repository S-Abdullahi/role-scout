import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, loginUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isUser: true,
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, isUser } = values;
    if (!email || !password || (!isUser && !name)) {
      toast.error("please fill required fields");
      return;
    }
    if (isUser) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <div className="h-screen w-screen bg-[--bg-main] flex justify-center">
      <div className="pt-16 w-[90%] sm:w-60% md:w-45% lg:max-w-[30%]">
        <div className="bg-[--bg-card]  t-[50%] rounded shadow-sm py-10 px-8">
          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="text-center text-3xl mb-4 mt-6">
            <h2>{values.isUser ? "Login" : "Register"}</h2>
          </div>
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {!values.isUser && (
                <FormRow
                  type="text"
                  name="name"
                  labelText="name"
                  handleChange={handleChange}
                  value={values.name}
                />
              )}

              <FormRow
                type="email"
                name="email"
                labelText="email"
                handleChange={handleChange}
                value={values.email}
              />
              <FormRow
                type="password"
                name="password"
                labelText="password"
                handleChange={handleChange}
                value={values.password}
              />
              {/* <Link to="/dashboard" onClick={handleSubmit} className="flex mt-5"> */}
              <button type="submit" className="submit-button">
                {isLoading ? "Loading..." : "Submit"}
              </button>
              {/* </Link> */}
              <div className="flex justify-center mt-2">
                <p>
                  {values.isUser ? "Not a member? " : "Already a member? "}
                  <span className="cursor-pointer text-[--card-title] font-bold hover:text-[--card-hover] hover:transition-all hover:ease-linear">
                    {values.isUser ? (
                      <span
                        onClick={() => {
                          setValues((prev) => ({
                            ...prev,
                            isUser: !prev.isUser,
                          }));
                        }}
                      >
                        Register
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          setValues((prev) => ({
                            ...prev,
                            isUser: !prev.isUser,
                          }));
                        }}
                      >
                        Login
                      </span>
                    )}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
