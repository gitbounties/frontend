"use client";

import React, { useEffect } from "react";
import RegisterRedirect from "../RegisterRedirect";

export default function Page() {
  return (
    <>
      <RegisterRedirect apiPath="/github/callback/install">
        <h1>Installation Pending</h1>
      </RegisterRedirect>
    </>
  );
}
