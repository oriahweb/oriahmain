'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  service: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("Subject"),
  service: yup.string().required().label("Service"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?: string;
};

export default function ContactForm({ btnCls = '' }: IProps) {
  const [submitStatus, setSubmitStatus] = useState<{message: string, success: boolean} | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    const formData = new FormData();
    formData.append("access_key", "3f96c5c6-96cb-40d7-81d9-e6716187b16d");
    Object.keys(data).forEach((key) => {
      formData.append(key, (data as any)[key]);
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus({
          message: "Message envoyé avec succès !",
          success: true
        });
        reset();
      } else {
        setSubmitStatus({
          message: "Une erreur est survenue. Veuillez réessayer.",
          success: false
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus({
        message: "Erreur réseau. Veuillez réessayer plus tard.",
        success: false
      });
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Nom</label>
        <input id='name' {...register("name")} type="text" placeholder="Votre nom" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Sujet</label>
        <input id='subject' {...register("subject")} type="text" placeholder="Votre sujet" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Service Demandé</label>
        <input id='service' {...register("service")} type="text" placeholder="Service demandé" />
        <ErrorMsg msg={errors.service?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Message</label>
        <textarea id='message' {...register("message")} placeholder="Votre message"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      {submitStatus && (
        <div className={`cn-contactform-message mb-25 ${submitStatus.success ? 'success' : 'error'}`}>
          {submitStatus.message}
        </div>
      )}
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
}
