"use client";

import React, { useEffect } from "react";
import AuthRedirect from "../AuthRedirect";

export default function Page() {
  return (
    <>
      <AuthRedirect apiPath="/github/callback/register">
        <h1>Register Pending</h1>
      </AuthRedirect>
    </>
  );
}
