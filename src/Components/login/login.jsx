import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logoWithName from "../../asset/images/trustt-logo-with-name.png";
import loginBg from "../../asset/images/loginbg.png";

function Login() {
  const [values, setValues] = useState({
    emailPhone: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePasswordVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", values.emailPhone, values.password);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className="flex flex-col items-center justify-center md:h-[50vh] lg:h-[100vh]">
              <div className="mt-10 -ml-5">
                <img
                  src={logoWithName}
                  className="max-w-[200px]"
                  alt="Trustt Agent"
                />
              </div>
              <div className="mt-[40px]">
                <img src={loginBg} className="max-w-[400px]" alt="login" />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className="flex flex-col justify-center lg:h-[100vh] p-[20px]">
              <div>
                <h1 className="text-4xl">
                  <b>Login in</b>
                </h1>
                <p className="text-[grey]">One step finance solution</p>
              </div>
              <div className="mt-3">
                <div>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Email/Phone"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={values.emailPhone}
                      onChange={handleChange("emailPhone")}
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handlePasswordVisibility}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        backgroundColor: "#111827",
                        borderRadius: "16px",
                        mb: 2,
                        mt: 2,
                      }}
                    >
                      Login
                    </Button>
                  </form>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="text-left w-auto">
                    <a href="">Forgot password</a>
                  </div>
                  <div className="text-right">
                    <a href="">Login via OTP</a>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;
