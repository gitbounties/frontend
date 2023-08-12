'use client';

import Image from 'next/image'
import React, { useState } from "react";

const API_URL = 'http://localhost:3001';

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      const { elements } = e.currentTarget;

      fetch(`${API_URL}/github/dummy/login`, {
          body: JSON.stringify({
            'username': (elements.namedItem("username") as HTMLInputElement).value,
          }),
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      }).then(async (result) => {
        console.log('result', result)
        //console.log(document.cookie)

        if (result.status == 200) {
          setIsLoggedIn(true);
        }
      });
  }

  const handleBountySubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      const { elements } = e.currentTarget;

      const data = {
        reward: (elements.namedItem("reward") as HTMLInputElement).value,
        owner: (elements.namedItem("owner") as HTMLInputElement).value,
        repo: (elements.namedItem("repo") as HTMLInputElement).value,
        issue: (elements.namedItem("issue") as HTMLInputElement).value,
      }

      console.log("creating bounty", data);

      fetch(`${API_URL}/bounty`, {
          body: JSON.stringify(data),
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include',
      }).then(async (result) => {
        console.log('result', result)

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

    <form onSubmit={handleLoginSubmit}>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Submit</button>
    </form>

    {isLoggedIn ? <div>Logged In</div> : <div>Not Logged In</div>}

    <form onSubmit={handleBountySubmit}>
      <label for="reward">reward</label>
      <input type="text" id="reward" name="reward" />
      <label for="owner">owner</label>
      <input type="text" id="owner" name="owner" />
      <label for="repo">repo</label>
      <input type="text" id="repo" name="repo" />
      <label for="issue">issue</label>
      <input type="text" id="issue" name="issue" />
      <button type="submit">Submit</button>
    </form>

    </main>
  )
}
