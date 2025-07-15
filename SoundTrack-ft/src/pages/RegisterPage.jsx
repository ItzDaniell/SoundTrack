import { useState } from "react";
import Hero from "../components/Hero";
import heroAuth from "../images/hero_auth.jpg";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "../components/Button";
import FilledInput from "@mui/material/FilledInput";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <main className="w-full h-screen flex">
      <div className="w-1/2 p-2">
        <div className="w-full h-full bg-gray-100">
          <Hero
            image={heroAuth}
            alt="Imágen de una persona escuchando música"
            customClass="w-full h-full rounded-lg"
          />
        </div>
      </div>
      <article className="w-1/2 flex flex-col p-8 items-center justify-center gap-6">
        <h2 className="font-bold text-4xl">Registrarse</h2>
        <p className="text-center w-3/4 text-sm text-gray-700">
          Bienvenido, ingresa tu email y contraseña para comenzar a usar
          SoundTrack
        </p>
        <form action="" className="flex flex-col w-96">
          <div className="flex flex-col gap-4">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                "& .MuiFilledInput-root": {
                  borderRadius: 2,
                  backgroundColor: "white",
                  "&:before": { borderBottom: "none" },
                  "&:hover:before": { borderBottom: "none" },
                  "&:hover:after": { borderBottom: "none" },
                  "&:after": {
                    borderBottom: "none", // azul
                    color: "#1f2937",
                  },
                  "& input::placeholder": {
                    color: "#6b7280",
                    opacity: 1,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#6b7280",
                },
              }}
            />
            <FormControl
              variant="filled"
              fullWidth
              sx={{
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                borderRadius: 2,
                "& .MuiFilledInput-root": {
                  borderRadius: 2,
                  backgroundColor: "white",
                  "&:before": { borderBottom: "none" },
                  "&:hover:before": { borderBottom: "none" },
                  "&:after": {
                    borderBottom: "none", // azul (Tailwind blue-500)
                    color: "#1f2937",
                  },
                  "& input": {
                    color: "#1f2937", // texto (Tailwind gray-800)
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#6b7280", // label (Tailwind gray-500)
                },
              }}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Escriba la contraseña
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              fullWidth
              sx={{
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                borderRadius: 2,
                "& .MuiFilledInput-root": {
                  borderRadius: 2,
                  backgroundColor: "white",
                  "&:before": { borderBottom: "none" },
                  "&:hover:before": { borderBottom: "none" },
                  "&:after": {
                    borderBottom: "none", // azul (Tailwind blue-500)
                    color: "#1f2937",
                  },
                  "& input": {
                    color: "#1f2937", // texto (Tailwind gray-800)
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#6b7280", // label (Tailwind gray-500)
                },
              }}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Repita la contraseña
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}e
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <p className="text-end mb-5 text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <Link className="text-blue-500 font-bold" to="/">
                Inicia sesión ahora
              </Link>
            </p>
            <Button
              type="submit"
              customClass="bg-red-500 font-bold text-white shadow-xl"
            >
              Crear cuenta
            </Button>
          </div>
        </form>
      </article>
    </main>
  );
};

export default RegisterPage;
