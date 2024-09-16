import React from "react";
import Logo2 from "/logo2.svg";
("use client");
import Steps from "./Steps";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
  Name: z
    .string({ message: "name must be a string" })
    .min(2, { message: "name too short" })
    .max(50, { message: "name too long" }),
  Password: z
    .string({ message: "password must be a string" })
    .min(8, { message: "password too short" })
    .max(30, { message: "password too long" }),
  Email: z
    .string({ message: "email must be a string" })
    .min(8, { message: "email too short" })
    .max(30, { message: "email too long" })
  ,
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

function Forms() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Password: "",
      Email: " ",
    },
  });
  const { toast } = useToast()
  const Toaster = () => {
    toast({
      title: "Your form has been submitted",
      description: "thank you",
    })
  }

  return (
    <div className=" h-full flex flex-col items-center justify-center mx-[5rem] ">
      <Form {...form}>
        <img src={Logo2} alt="logo work et yamo" className="h-[2.5rem]" />
        <div className="text-center">
          <h1 className="font-bold text-2xl">Inscription</h1>
          <p className="text-sm text-gray-500 font-extralight">
            Rentrez vos infos pour vous connecter .
          </p>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full gap-4"
        >
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="abc@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col gap-4">
            <Button type="submit" onClick={Toaster}>Submit</Button>
            <div className="flex items-center justify-around">
              <hr className="h-1 w-[30%] bg-gray-500"/> Ou avec <hr className="h-1 w-[30%] bg-gray-500"/>
            </div>
            <Button className="bg-transparent text-gray-500" type="submit">
              Google
            </Button>
            <Button className="bg-transparent text-gray-500" type="submit">
              Github
            </Button>
          </div>
          <p className="text-sm font-extralight text-center ">By clicking continue, you agree to our
        <a href="/" className="text-blue-400 underline"> Terms of Service</a> and <a href="/"  className="text-blue-400 underline"> Privacy Policy</a>.</p>
          <div className="flex justify-around items-center gap-2 ">
          <Steps color="blue"/>
          <Steps color="gray"/>
          <Steps color="gray"/>
          <Steps color="gray"/>
          </div>

        </form>
      </Form>
    </div>
  );
}

export default Forms;
