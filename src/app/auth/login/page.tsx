"use client";

import React, { useEffect } from "react";
import AuthRedirect from "../AuthRedirect";

export default function Page() {
  return (
    <>
      <AuthRedirect apiPath="/github/callback/login">
        <h1>Login Pending</h1>
      </AuthRedirect>
    </>
  );
}
