"use client";

import Image from "next/image";
import styles from "../app/globals.css";
import { useState } from "react";

const API_URL = "https://gitbounties.io:3001";
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [bounties, setBounties] = useState([]);

  const handleLoginSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    let res = await fetch(`${API_URL}/github/dummy/login`, {
      body: JSON.stringify({
        username: (elements.namedItem("username") as HTMLInputElement).value,
      }),
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log("result", res);
    //console.log(document.cookie)

    if (res.status == 200) {
      setIsLoggedIn(true);
    }
  };

  const handleBountySubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const data = {
      reward: parseInt(
        (elements.namedItem("reward") as HTMLInputElement).value
      ),
    };

    const query = new URLSearchParams({
      owner: (elements.namedItem("owner") as HTMLInputElement).value,
      repo: (elements.namedItem("repo") as HTMLInputElement).value,
      issue: parseInt((elements.namedItem("issue") as HTMLInputElement).value),
    });

    console.log("creating bounty", data);

    let res = await fetch(`${API_URL}/bounty?` + query, {
      body: JSON.stringify(data),
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log("result", res);
  };
  const handleBountyFetch = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/bounty?user=true`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const new_bounties = await res.json();
    setBounties(new_bounties);
    console.log("bounties", bounties);
  };

  const GITHUB_REGISTER_URL = `https://github.com/login/oauth/authorize?client_id=Iv1.95276d06092540d3&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/auth/register`;
  const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=Iv1.95276d06092540d3&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/auth/login`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gradient__bg">
      <header className="fixed w-full top-0 bg-black bg-opacity-30 backdrop-blur-sm transition duration-200 ease-in-out z-50">
        <div className="md:max-w-full mx-auto w-full max-w-full px-8 sm:px-16 py-4">
          <div className=" flex justify-between items-center">
            <div className=" flex">
              <a className="sm:w-[150px]" href="/"></a>
            </div>
            <div
              className=" hidden md:flex space-x-10 ml-12"
              style={{ fontSize: 200, marginLeft: "1100px" }}
            >
              <a
                href="https://github.com/gitbounties"
                className=" text-sm transition duration-200 ease-in-out font-light text-slate-300 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://github.com/gitbounties"
                className=" text-sm transition duration-200 ease-in-out font-light text-slate-300 hover:text-white"
              >
                Documentation
              </a>
              <a
                href="/contact-us"
                className=" text-sm transition duration-200 ease-in-out font-light text-slate-300 hover:text-white"
              >
                Contact
              </a>
              <a
                href="/lol"
                className=" text-sm transition duration-200 ease-in-out font-light text-slate-300 hover:text-white"
              >
                lol
              </a>
            </div>
            <div className=" flex space-x-4"></div>
          </div>
        </div>
      </header>

      <a
        style={{
          fontSize: 200,

          marginTop: "20vh",
        }}
      >
        <div className="header-content">
          <h1 className="gradient__text">GITBOUNTIES</h1>
        </div>
      </a>
      <button
        type="button"
        className="text-white bg-gradient-to-br  shadow-xl  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        style={{
          display: "flex",
          alignItems: "center",
          // width: "15%",
        }}
        onClick={() => {
          window.location.href = GITHUB_REGISTER_URL;
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="mr-2"
          viewBox="0 0 1792 1792"
        >
          <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
        </svg>
        Register using Github
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-br  shadow-xl  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        style={{
          marginBottom: "20vh",
          display: "flex",
          alignItems: "center",
          // width: "15%",
        }}
        onClick={() => {
          window.location.href = GITHUB_LOGIN_URL;
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="mr-2"
          viewBox="0 0 1792 1792"
        >
          <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
        </svg>
        Login using Github
      </button>

      <div className=" mx-auto ">
        <div className="lg:pr-8 lg:pt-4">
          <div className=" lg:max-w-lg">
            <h1 className="gradient__text sm:text-4xl mt-16 sm:mt-0">
              Revolutionizing Open Source Collaboration
            </h1>
            <p className="mt-6 text-lg font-light leading-8 text-gray-200">
              Built upon a decentralized platform, GitBounties presents a
              groundbreaking approach to incentivize and reward contributors for
              their impactful work within repositories.
            </p>
            <dl className="jsx-be5904ba09669c67 mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              <div className="relative pl-16">
                <dt className="inline font-semibold text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    className="absolute left-0 top-2 h-10 w-10 text-indigo-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61c6e1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </dt>
                <dd className=" inline">
                  Contributors from various backgrounds and skill sets can
                  engage in meaningful work, whether it's coding, documentation,
                  testing, or design.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="inline font-semibold text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    className="absolute left-0 top-2 h-10 w-10 text-indigo-300"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61c6e1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </dt>{" "}
                <dd className=" inline">
                  Contributors gain more than just financial rewards. For each
                  merged issue, the contributor appears as an NFT in their
                  wallet.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="inline font-semibold text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    className="absolute left-0 top-2 h-10 w-10 text-indigo-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61c6e1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                    <path d="M15 7h6v6" />
                  </svg>
                </dt>
                <dd className="inline">
                  GitBounties streamlines the process of recognition and
                  compensation.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="m-horizontal mb-6 flex items-center justify-between md:mb-9">
          <h2 style={{ fontSize: "50px" }} className="gradient__text">
            <b>Learn More</b>
          </h2>
          <div className="flex gap-3 md:gap-4"></div>
        </div>
        <div className="no-scrollbar flex overflow-x-scroll scroll-smooth whitespace-nowrap px-5 xs:px-7 sm:px-9 xl:px-16 3xl:px-[calc((100%-1280px)/2)]">
          <div className="justify-self-stretch mr-6 lg:mr-8 last:mr-0">
            <div className="white-to-lighter-purple reveal-animation-1 overflow-hidden whitespace-normal border border-purple rounded-2xl md:rounded-4xl w-[300px] md:w-[380px] relative h-full ">
              <div className="relative px-5 pt-6 pb-8 md:px-7 md:pt-8 md:pb-10">
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-3xl">
                  What is a Decentralized platform
                </h3>
                <p className="mb-6 leading-relaxed text-white dark:text-lightPurple md:mb-9">
                  Learn the fundamentals of Decentralized exchange and it's
                  benefits/downsides.
                </p>
                <div className="relative cursor-pointer bg-white dark:bg-black rounded-full border border-purple dark:border-lightPurple undefined py-2.5 text-center w-full">
                  <a
                    href="https://www.youtube.com/watch?v=2tTVJL4bpTU"
                    className="text-black dark:text-white"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-stretch mr-6 lg:mr-8 last:mr-0">
            <div className="white-to-lighter-purple dark:black-to-dark-purple overflow-hidden whitespace-normal border border-purple rounded-2xl md:rounded-4xl w-[300px] md:w-[380px] relative h-full ">
              <div className="relative px-5 pt-6 pb-8 md:px-7 md:pt-8 md:pb-10">
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-3xl">
                  How it works?
                </h3>
                <p className="mb-6 leading-relaxed text-white dark:text-lightPurple md:mb-9">
                  Watch our video * add the hackaton video
                </p>
                <div className="relative cursor-pointer bg-white dark:bg-black rounded-full border border-purple dark:border-lightPurple undefined py-2.5 text-center w-full">
                  <p className="text-black dark:text-white">Watch Video</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-stretch mr-6 lg:mr-8 last:mr-0">
            <div className="white-to-lighter-purple dark:black-to-dark-purple overflow-hidden whitespace-normal border border-purple rounded-2xl md:rounded-4xl w-[300px] md:w-[380px] relative h-full ">
              <div className="relative px-5 pt-6 pb-8 md:px-7 md:pt-8 md:pb-10">
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-3xl">
                  soomething{" "}
                </h3>
                <p className="mb-6 leading-relaxed text-white dark:text-lightPurple md:mb-9">
                  something else{" "}
                </p>
                <div className="relative cursor-pointer bg-white dark:bg-black rounded-full border border-purple dark:border-lightPurple undefined py-2.5 text-center w-full"></div>
              </div>
            </div>
          </div>
          <div className="justify-self-stretch mr-6 lg:mr-8 last:mr-0"></div>
        </div>
      </section>
    </main>
  );
}
