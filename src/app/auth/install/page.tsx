"use client";

import React, { useEffect } from "react";
import AuthRedirect from "../AuthRedirect";

export default function Page() {
  return (
    <>
      <AuthRedirect apiPath="/github/callback/install">
        <h1>Installation Pending</h1>
      </AuthRedirect>
    </>
  );
}
