"use client";

import { useForm } from "react-hook-form";
import { userSignUpSchema } from "../../../lib/zod/userSignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function useFormSignUp() {
  const formSignUp = useForm<z.infer<typeof userSignUpSchema>>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userPswd: "",
      userMobilePhone: "",
    },
  });
  return formSignUp;
}
