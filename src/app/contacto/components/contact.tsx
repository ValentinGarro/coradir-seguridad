"use client"

import { useForm } from "react-hook-form";
import { FormSchema, InputForm } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import CustomInput from "./customInput";

export default function Contact() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(FormSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });
    const { handleSubmit, formState: { errors , isSubmitting }, control }=form;
    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };
    const inputs: InputForm[] = [
        {
            name: "name",
            label: "Nombre",
            type: "text",
            ref:useRef<HTMLInputElement>(null),
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            ref: useRef<HTMLInputElement>(null),
        },
        {
            name: "phone",
            label: "Telefono",
            type: "text",
            ref: useRef<HTMLInputElement>(null),
        },
        {
            name: "message",
            label: "Mensaje",
            type: "textarea",
            ref: useRef<HTMLInputElement>(null),
        },
    ];
    return (
        <section className="flex flex-col pt-30 justify-start items-center container   min-h-[100vh]"
            style={{
                backgroundImage: "url('/img/02.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <section className="w-[90%] flex flex-col items-center">
                <h1 className="text-red text-5xl font-bold text-shadow">COMUNICATE<br/> CON NOSOTROS</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="py-5 flex flex-col items-center w-[80%]">
                    {inputs.map((input)=>(
                        <CustomInput 
                            key={input.name} 
                            {...input} 
                            control={control} 
                            errors={errors}  
                        />
                    ))}  
                    <button 
                        type="submit" 
                        disabled={isSubmitting || Object.keys(errors).length > 0}
                        className="py-5 w-full mx-auto bg-red-light text-white rounded-2xl uppercase"
                        style={{
                            opacity: isSubmitting || Object.keys(errors).length > 0 ? 0.7 : 1,
                            cursor: isSubmitting || Object.keys(errors).length > 0 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>  
                </form>
            </section>
        </section>
    );
}