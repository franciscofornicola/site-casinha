import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1 }}>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <WhatsAppButton
        href="https://wa.me/5511971345886?text=Olá,%20gostaria%20de%20fazer%20uma%20reserva"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </WhatsAppButton>
      <Footer>
        <FooterLinks>
          <a href="https://www.instagram.com/casinhamineira" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/5511971345886" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.ifood.com.br/delivery/sao-paulo-sp/casinha-mineira-bela-vista/2746bbe4-0ab7-42ad-afe6-15f7e73434ed" target="_blank" rel="noopener noreferrer">iFood</a>
        </FooterLinks>
        <FooterCopy>
          © {new Date().getFullYear()} Casinha Mineira · Rua São Carlos do Pinhal, 445 – Bela Vista, São Paulo – SP<br/>
          Todos os direitos reservados.
        </FooterCopy>
      </Footer>
    </div>
  );
}

const WhatsAppButton = styled(motion.a)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: var(--primary);
  color: var(--white);
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
`;
const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 0.5rem;
  a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    &:hover {
      color: var(--secondary);
    }
  }
`;
const FooterCopy = styled.div`
  font-size: 1rem;
  opacity: 0.8;
  text-align: center;
`;
