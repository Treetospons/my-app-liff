'use client';

import React from 'react';
import { redirect, RedirectType } from 'next/navigation';

const Page = () => {
  const menus = [
    {
      id: 1,
      title: 'register',
      redirect: 'https://liff.line.me/2008669868-AErVyB8y'
    },
    {
      id: 2,
      title: 'card',
      redirect: '/card'
    }
  ]

  return (
    <div>
      <h1>Rich Menu Page</h1>
      {menus.map((menu) => (
        <div key={menu.id} style={{ margin: '10px 0' }}>
          <button
            onClick={() => {
              redirect(menu.redirect, RedirectType.push);
            }}
          >
            Go to {menu.title} page
          </button>
        </div>
      ))}
    </div>
  );

};

export default Page;