'use client';

import Image from 'next/image'
import React, { useState } from "react";

export default function Home() {

  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      fetch("http://localhost:3001/github/dummy/login", {
          body: JSON.stringify({
            'username': username,
          }),
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      }).then(async (result) => {
        console.log('result', result)

        if (result.status == 200) {
          setIsLoggedIn(true);
        }
      });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div>
        Login
      </div>

    <form onSubmit={handleSubmit}>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Submit</button>
    </form>

    {isLoggedIn ? <div>Logged In</div> : <div>Not Logged In</div>}

    </main>
  )
}
