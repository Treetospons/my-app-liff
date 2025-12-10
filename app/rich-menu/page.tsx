'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        // This effect runs once when the component mounts
        console.log('Rich Menu Page loaded');

        const liffinit = async () => {
            try {
                const liffModule = await import('@line/liff');
                // `@line/liff` may export `liff` as a named export or default; normalize it
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const liff: any = (liffModule && (liffModule.liff || liffModule.default)) || liffModule;

                const liffId = '2008669868-BqGZKXQK';
                await liff.init({ liffId });

                liff.ready.then(async () => {
                    if (!liff.isLoggedIn()) {
                        liff.login();
                        return;
                    }

                    const profile = await liff.getProfile();
                    window.alert('Hello, ' + profile.displayName);

                    // navigate on client
                    router.push('/rich-menu/menu');
                }).catch((err: unknown) => {
                    window.alert('LIFF initialization failed: ' + JSON.stringify(err));
                });
            } catch (err) {
                console.error('Failed to load @line/liff dynamically', err);
            }
        };

        liffinit();
    }, [router]);

    return (
        <div>
            <h1>Menu Page</h1>
        </div>
    );
};

export default Page;