import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    setDisabled(true);

    const loginData = {
      username: username,
      password: password,
    };

    const secret = "USER_SESSION_SECRET";
    const json = JSON.stringify(loginData);

    async function hmacSHA256(message, key) {
      const enc = new TextEncoder();
      const keyData = await crypto.subtle.importKey(
        "raw",
        enc.encode(key),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"],
      );
      const signature = await crypto.subtle.sign(
        "HMAC",
        keyData,
        enc.encode(message),
      );
      return btoa(String.fromCharCode(...new Uint8Array(signature)));
    }

    const hmac = await hmacSHA256(json, secret);

    fetch(API.login, {
      method: "POST",

      headers: {
        "content-type": "application/json",
        secret: hmac,
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setDisabled(false);
          if (data?.result?.changePassword) {
            navigate(`/change-password?token=${data?.result?.token}`);
          }
          if (data?.result?.changePassword === false) {
            const readOnly = data?.result?.readOnly;
            const adminToken = data?.result?.token;
            const adminName = data?.result?.loginname;
            const adminRole = data?.result?.role;
            const adminSite = data?.result?.site;
            dispatch(
              setUser({
                readOnly,
                adminToken,
                adminName,
                adminRole,
                adminSite,
              }),
            );
            localStorage.setItem("adminToken", adminToken);
            toast.success("Login Success");
            navigate("/");
          }
        } else {
          setDisabled(false);
          setErrorMessage(data?.error?.status?.[0]?.description);
        }
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage]);
  return (
    <div className="page-content pb-0">
      <div data-card-height="cover">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-center bg-theme rounded-m mx-3"
        >
          <div className="p-4">
            <h1 className="text-center font-800 font-40 mb-1">Sign In</h1>
            <p className="color-highlight text-center font-12">
              {"Let's"} get you logged in
            </p>
            <div className="input-style no-borders has-icon validate-field">
              <i className="fa fa-user" />
              <input
                {...register("username", {
                  required: true,
                })}
                className="form-control validate-name"
                id="form1a"
                placeholder="Enter your username"
              />
              <label htmlFor="form1a" className="color-blue-dark font-10 mt-1">
                Name
              </label>
              <i className="fa fa-times disabled invalid color-red-dark" />
              <i className="fa fa-check disabled valid color-green-dark" />
              <em>(required)</em>
            </div>
            <div className="input-style no-borders has-icon validate-field mt-4">
              <i className="fa fa-lock" />
              <input
                {...register("password", {
                  required: true,
                })}
                type="text"
                className="form-control validate-password"
                placeholder="Password"
              />
              <label htmlFor="form3a" className="color-blue-dark font-10 mt-1">
                Password
              </label>
              <i className="fa fa-times disabled invalid color-red-dark" />
              <i className="fa fa-check disabled valid color-green-dark" />
              <em>(required)</em>
            </div>
            <button
              disabled={disabled}
              style={{ width: "100%" }}
              type="submit"
              className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-highlight"
            >
              LOGIN
            </button>
          </div>
        </form>
        <div
          className="card-overlay-infinite preload-img"
          data-src="images/pictures/_bg-infinite.jpg"
        />
      </div>
    </div>
  );
};

export default Login;
