"use client";

import React, { useEffect } from "react";
import RegisterRedirect from "../RegisterRedirect";

export default function Page() {
  return (
    <>
      <RegisterRedirect apiPath="/github/callback/register">
        <h1>Register Pending</h1>
      </RegisterRedirect>
    </>
  );
}
