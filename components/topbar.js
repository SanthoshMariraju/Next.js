import {useRouter} from 'next/router'
import style from '../styles/Topbar.module.css'
export const Topbar =() =>{
    const router = useRouter();
  return (
    <div className={style.main}>
       <div onClick={() => router.push('/')}>Home</div>
       <div onClick={() => router.push('/feed/1')}>Feed</div>
       <div onClick={() => router.push('/eom')}>EOM</div>
       <div onClick={() => (window.location.href='https://twitter.com')}>Twiteer</div>
    </div>
  )
}

