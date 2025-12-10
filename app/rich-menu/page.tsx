'use client';

import React, { useEffect } from 'react';
import liff from '@line/liff';

const Page = () => {
    useEffect(() => {
        // This effect runs once when the component mounts
        console.log('Rich Menu Page loaded');
        // liff.init({ liffId: 'YOUR_LIFF_ID' })
    }, []);

    return (
        <div>
            <h1>Menu Page</h1>
        </div>
    );
};

export default Page;