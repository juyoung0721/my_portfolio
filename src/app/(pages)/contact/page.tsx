'use client';
import ContactTitle from './components/ContactTitle';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Header from '@/components/header';

export default function Contact() {
    return (
        <>
        <Header />
        <main className="min-h-screen bg-[#ffeee6] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <ContactTitle />
            <div className="flex flex-col lg:flex-row gap-10 mt-16">
            <ContactForm />
            <ContactInfo />
            </div>
        </div>
        </main>
        </>
    );
}
