'use client';
import { useState, type FormEvent } from 'react';
import { Arrow } from './icons';

export function ContactForm() {
  const [status, setStatus] = useState('');
  function compose(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get('name') || '').trim();
    const email = String(fields.get('email') || '').trim();
    const message = String(fields.get('message') || '').trim();
    const subject = encodeURIComponent(`Professional enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:gaganchugh25@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Email draft requested. If your mail app did not open, use the email link alongside this form.');
  }
  return <form className="contact-form" onSubmit={compose}>
    <h3>Let’s start a conversation.</h3>
    <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} />
    <label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
    <label htmlFor="contact-message">What would you like to discuss?</label><textarea id="contact-message" name="message" required rows={4} maxLength={3000} />
    <button type="submit" className="button button-primary">Open email draft <Arrow diagonal /></button>
    <p className="form-note">Opens a draft in your email app. Your details are not stored on this website.</p>
    <p className="form-status" role="status">{status}</p>
  </form>;
}
