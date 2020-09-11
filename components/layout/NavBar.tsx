import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <div className='navigation'>
        <Link href='/'>
          <a className='nav-link'>صفحه اصلی</a>
        </Link>

        <Link href='/articles'>
          <a className='nav-link'>مقالات</a>
        </Link>

        <Link href='/posts'>
          <a className='nav-link'>خبرها</a>
        </Link>

        <Link href='/login'>
          <a className='nav-link'> ورود</a>
        </Link>

        <Link href='/dashboard/article'>
          <a className='nav-link'> ثبت مقاله</a>
        </Link>
      </div>
    </>
  );
}
