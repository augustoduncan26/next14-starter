import { auth, signIn } from '@/lib/auth';
import styles from './login.module.css';
import { handleGithubLogin } from '@/lib/action';
import LoginForm from '@/components/loginForm/loginForm';
//import { useRouter } from 'next/navigation';

const LoginPage = async () => {

  //const router = useRouter();
  const session = await auth();
  console.log(session);
  //auth?.user?.isAdmin && router.push('/admin');
  // const handleGithubLogin = async () =>{
  //   'use server';
  //   await signIn('github');
  // }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
