import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
// import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Link,
  Stack,
  // Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  // FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { AuthContext } from '../../../contexts/auth';
// import { loginss } from '../../../api'
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  // const [user, setUser] = useState(null)
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('O e-mail deve ser um endereço de e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('Senha requerida'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // reativa quando integrar

      // try {
      //   const response = await loginss(values.email, values.password);
      //   await localStorage.setItem('token', response.token.toString());
      //   login(values.email, values.password, response.name, response.account_id)
      // } catch (e) {
      //   console.log('socorro', e)
      // }

      setTimeout(async () => {
        // alert(JSON.stringify(values, null, 2));
        if (values.password === '123') {
          login({ id: '123', email: values.email, name: 'teste' });
          localStorage.setItem('token', '3123123'.toString());
          navigate('/dashboard/app', { replace: true });
        }
        // alert(JSON.stringify(values.email, values.password));
        setSubmitting(false);
      }, 400);
    },

    // onSubmit: () => {
    //   // login(email, password)
    //   navigate('/dashboard/app', { replace: true });
    // },
  });

  // const logout = () => {
  //   setUser(null);
  //   navigate('/login')
  // }

  const {
    errors,
    touched,
    // values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      {/* <p>{String(authenticated)}</p> */}
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Senha"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          /> */}

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Esqueceu a senha?
          </Link>
        </Stack>

        <LoadingButton
          style={{ background: '#3A2B5A' }}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Entrar
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
