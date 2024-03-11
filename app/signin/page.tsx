"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="">
      {" "}
      <SignIn></SignIn>
    </div>
  );
}

export default page;
