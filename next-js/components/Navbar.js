import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src='/logo.svg.png' width={100} height={30} alt='nike' />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
};