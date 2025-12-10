'use client';

import React, { useEffect } from 'react';
import liff from '@line/liff';
import { redirect, RedirectType } from 'next/navigation';

const Page = () => {
    useEffect(() => {
        // This effect runs once when the component mounts
        console.log('Rich Menu Page loaded');

        const liffinit = async () => {
            const liffId = '2008669868-BqGZKXQK';
            await liff.init({ liffId: liffId })
            liff.ready.then(async () => {
                if (!liff.isLoggedIn()) {
                    liff.login();
                }

                const profile = await liff.getProfile();
                alert('Hello, ' + profile.displayName);

                redirect('/rich-menu/menu', RedirectType.push);
            }).catch((err) => {
                alert('LIFF initialization failed: ' + JSON.stringify(err));
            })
        }

        liffinit()
    }, []);

    return (
        <div>
            <h1>Menu Page</h1>
        </div>
    );
};

export default Page;