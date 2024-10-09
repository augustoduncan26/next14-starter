"use client";
import { useState } from "react";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import $ from "jquery";


const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);

    if (state?.error) {
        $('.mssg-alert').show();
        setTimeout(() => {
            $('.mssg-alert').hide();
        }, 3000);
    }

  return (
    
    <form className={styles.form} action={formAction}>
        {
        state?.error ?
        (
            <div className="mssg-alert" style={{color:'#721c24', backgroundColor: '#f8d7da', borderColor:'#f5c6cb' , borderRadius: 5, alignContent: 'center', height: 30}}>
            {state?.error}
            </div>
            ):''
        }
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;