import { SubmitHandler } from "react-hook-form";
import { userSignUpSchema } from "../lib/zod/userSignUpSchema";
import { z } from "zod";

type userSignUpSchema = z.infer<typeof userSignUpSchema>;

export const onSubmitSignUp: SubmitHandler<userSignUpSchema> = (data) => {
  console.log(data);
};
