import { useAuth } from '../../context/AuthProvider/useAuth'
import './style.scss'
import React, { useState } from 'react';
import { api } from "../../services/api";





function verifyLog() {

  const auth = useAuth();

  if (!auth.email) {
    console.log("não ta logado")
    return (
      <ul class="navbar-nav px-1 ms-auto me-5 mb-2 mb-lg-0">


        <button type="button" class=" px-5 btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-whatever="@getbootstrap">Login</button>
      </ul>
    )
  }
  console.log("ta = logado")

  return (
    <ul class="navbar-nav px-1 ms-auto me-5 mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" href="#">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Events</a>
      </li>

      <button type="button" class=" px-5 btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-whatever="@getbootstrap">Logout</button>
    </ul>
  )
}


export function Header() {
  function initialState() {
    return { email: '', password: '' }
  }
  const [values, setValues] = useState(initialState)



  async function LoginRequest(email, password) {

    try {
      const request = await api.post('users/auth', { email, password })

      alert(request.data[0].email)

      return request.data;
    } catch (error) {
      console.log("deu erro no Login")
      return null;
    }

  }

  function botaoHandler(event) {
    event.preventDefault()
    console.log("Botão Clicado!")
    LoginRequest(values.email, values.password)
  }


  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,

    })
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-md py-3">
          <a class="navbar-brand" href="#">MasterEvent</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            {verifyLog()}

          </div>
        </div>


      </nav>
      <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-success bg-opacity-25">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form name='login' >
                <div class="mb-3">
                  <label for="email-login" class="col-form-label">Email:</label>
                  <input type="text" class="form-control" name='email' onChange={onChange} value={values.email} id="email-login" required />
                </div>
                <div class="mb-4">
                  <label for="pass-login" class="col-form-label">Password:</label>
                  <input type="password" class="form-control" name='password' onChange={onChange} value={values.password} id="pass-login" required />
                </div>
                <div class="modal-footer d-flex justify-content-between">
                  <button type="button" class="text-light px-5 btn bg-dark bg-opacity-50" data-bs-toggle="modal" data-bs-target="#registerModal" data-bs-whatever="@getbootstrap">Register</button>
                  <button type="btn" onClick={botaoHandler} class="btn btn-success px-5">Login</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-success bg-opacity-25">
              <h5 class="modal-title" id="exampleModalLabel">Register</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Name:</label>
                  <input type="text" class="form-control" id="recipient-name" required />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Email:</label>
                  <input type="text" class="form-control" id="recipient-name" required />
                </div>
                <div class="mb-3">
                  <label for="pass" class="col-form-label">Password:</label>
                  <input type="password" class="form-control" id="pass" required />
                </div>
                <div class="mb-3">
                  <label for="passConfirm" class="col-form-label">Confirm Password:</label>
                  <input type="password" class="form-control" id="passConfirm" required />
                </div>
                <div class="modal-footer d-flex justify-content-between">
                  <button type="submit" class="btn btn-success px-5 w-100">Register</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}