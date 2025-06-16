"use client";

import { Button } from "@/components/ui/button";
import { SiGoogle, SiGithub } from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormSignUp } from "@/hooks/useForm/formSignUp";
import Link from "next/link";
import { onSubmitSignUp } from "../../../../services/onSubmitSignUp"; // Mantenha esta importação
import { InputMask } from "@react-input/mask";
import clsx from "clsx";

export default function SignUp() {
  const formSignUp = useFormSignUp();
  return (
    <div className="w-full max-w-sm p-3">
      <Card>
        <CardHeader className="font-semibold">Sign Up</CardHeader>
        <CardDescription className="px-5">
          Create your account. Use Google or GitHub for quick sign-up, or fill
          in your details below.
        </CardDescription>
        <CardContent>
          <Button
            variant="outline"
            className="w-full flex justify-center items-center"
          >
            <SiGoogle size={32} />
            {""} Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex justify-center items-center mt-3"
          >
            <SiGithub size={32} />
            {""} GitHub
          </Button>
          <Form {...formSignUp}>
            {/* O onSubmit DEVE estar aqui na tag <form> */}
            <form
              className="flex flex-col gap-3 mt-3 w-full"
              onSubmit={formSignUp.handleSubmit(onSubmitSignUp)}
            >
              {/* UserName Field */}
              <div className="flex flex-col w-full gap-1">
                <FormField
                  control={formSignUp.control}
                  name="userName" // Use 'name' prop com o nome do campo
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Create an username..."
                          {...field}
                          type="text"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* As mensagens de erro DEVEM aparecer aqui se o Zod rejeitar */}
                {formSignUp.formState.errors.userName && (
                  <p className="text-red-500/90">
                    {formSignUp.formState.errors.userName?.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col w-full gap-1">
                <FormField
                  control={formSignUp.control}
                  name="userEmail" // Use 'name' prop
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Create an email..."
                          {...field}
                          type="email"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {formSignUp.formState.errors.userEmail && (
                  <p className="text-red-500/90">
                    {formSignUp.formState.errors.userEmail?.message}
                  </p>
                )}
              </div>

              {/* Age Field */}
              <div className="flex flex-col w-full gap-1">
                <FormField
                  control={formSignUp.control}
                  name="userAge" // Use 'name' prop
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        {/* Importante: para input type="number", o valor que você passa
                            para {...field} deve ser um número ou undefined.
                            Zod espera number, então certifique-se de que o input
                            está retornando um número. onChange={e => field.onChange(Number(e.target.value) || undefined)}
                            pode ser necessário se Zod reclamar de string.
                        */}
                        <Input
                          placeholder="Type your age"
                          {...field}
                          type="number"
                          // Adicione um onChange customizado para garantir que o valor é um número
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? undefined
                                : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {formSignUp.formState.errors.userAge && (
                  <p className="text-red-500/90">
                    {formSignUp.formState.errors.userAge?.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col w-full gap-1">
                <FormField
                  control={formSignUp.control}
                  name="userPswd" // Use 'name' prop
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Create a password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {formSignUp.formState.errors.userPswd && (
                  <p className="text-red-500/90">
                    {formSignUp.formState.errors.userPswd?.message}
                  </p>
                )}
              </div>

              {/* Mobile Phone Field */}
              <div className="flex flex-col w-full gap-1">
                <FormField
                  control={formSignUp.control}
                  name="userMobilePhone" // Use 'name' prop
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <InputMask
                          mask="(##) #####-####"
                          replacement={{ "#": /\d/ }}
                          className={clsx(
                            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                          )}
                          {...field}
                          showMask
                          placeholder="(##) #####-####"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {formSignUp.formState.errors.userMobilePhone && (
                  <p className="text-red-500/90">
                    {formSignUp.formState.errors.userMobilePhone?.message}
                  </p>
                )}
              </div>
              <CardFooter className="flex flex-col gap-2 w-full">
                <CardDescription className="mt-2 w-full">
                  Don’t have an account?{" "}
                  <Link href="/sign-in" className="hover:underline">
                    click here
                  </Link>
                </CardDescription>
                <Button
                  type="submit" // Mantenha type="submit" no botão
                  className="cursor-pointer w-full"
                  variant="default"
                  // Não coloque onSubmit aqui, ele já está na tag <form>
                >
                  Sign Up
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
