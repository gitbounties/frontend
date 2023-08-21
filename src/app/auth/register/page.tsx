"use client";

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

export default function Page() {

  const searchParams = useSearchParams()

  useEffect(() => {

    const request = async () => {
      // TODO error handling for when searchParams code is null/malformed
      const query = new URLSearchParams({
        code: searchParams.get('code') ?? '',
      });

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/github/callback/register` + query, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      })

      console.log(res);
    }

    request().catch(console.error);

  }, []);

  return (
    <>
      <h1>Register Redirect</h1>
    </>
  );
}
