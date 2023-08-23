"use client";

import React, { useEffect } from "react";
import LoginRedirect from "../LoginRedirect";

export default function Page() {
  return (
    <>
      <LoginRedirect apiPath="/github/callback/login">
        <h1>Login Pending</h1>
      </LoginRedirect>
    </>
  );
}
