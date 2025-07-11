'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Preloader = dynamic(() => import('@/components/ui/Preloader'), {
  ssr: false
});

const MainContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: var(--background);
  color: var(--text);
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/assets/hero-bg.jpg') center/cover no-repeat;
  id: 'hero';
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: var(--white);
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-family: var(--font-primary);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  font-family: var(--font-secondary);
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-secondary);
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
  cursor: pointer;
  
  span {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    border-right: 2px solid var(--white);
    border-bottom: 2px solid var(--white);
    transform: rotate(45deg);
    animation: scrollDown 2s infinite;
  }
  
  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-5px, -5px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(5px, 5px);
    }
  }
`;

const AboutSection = styled.section`
  padding: 6rem 2rem 0 2rem;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  margin-bottom: 18rem;
  id: 'about';

  @media (max-width: 768px) {
    padding-top: 3rem;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const AboutContent = styled(motion.div)`
  color: var(--text);
`;

const AboutTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--primary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--secondary);
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--primary);
  }
`;

const FeatureText = styled.span`
  font-size: 1rem;
  color: var(--text);
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary), transparent);
    opacity: 0.1;
  }
`;

const SpecialDishesSection = styled.section`
  padding: 0 2rem;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  margin-bottom: 18rem;
  id: 'special-dishes';
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  color: var(--primary);
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--secondary);
  }
`;

const DishesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const DishCard = styled(motion.div)`
  background-color: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const DishImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${DishCard}:hover & img {
    transform: scale(1.1);
  }
`;

const DishContent = styled.div`
  padding: 1.5rem;
`;

const DishTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-family: var(--font-primary);
`;

const DishDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const DishPrice = styled.span`
  font-size: 1.25rem;
  color: var(--secondary);
  font-weight: 600;
  display: block;
  margin-top: 1rem;
`;

const DishTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--primary);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const CardapioSection = styled.section`
  padding: 0 2rem;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  margin-bottom: 10rem;
  id: 'cardapio';
`;

const FlipContainer = styled.div`
  perspective: 1200px;
  width: 100%;
  height: 800px;
  position: relative;
`;

const FlipCard = styled(motion.div)<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4,0.2,0.2,1);
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const CardapioFace = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

const CardapioBack = styled(CardapioFace)`
  transform: rotateY(180deg);
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 10;
`;

const ZoomButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: var(--secondary);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const GallerySection = styled.section`
  min-height: 100vh;
  padding: 3rem 2rem;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  id: 'gallery';
`;

const GalleryGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const GalleryCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  color: var(--white);
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 2;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-family: var(--font-primary);
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.9;
  }
  
  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 3rem 2rem;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  id: 'contact';
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  color: var(--text);
`;

const ContactTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--primary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--secondary);
  }
`;

const ContactText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-secondary);
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--primary);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const MapContainer = styled(motion.div)`
  margin-top: 4rem;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const InstagramButton = styled(motion.a)`
  position: fixed;
  bottom: 2rem;
  right: 6rem;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  svg {
    width: 32px;
    height: 32px;
  }
`;

const WhatsAppButton = styled(motion.a)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  svg {
    width: 32px;
    height: 32px;
  }
`;

const TestimonialsSection = styled.section`
  min-height: auto;
  padding: 3rem 2rem;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  id: 'testimonials';
`;

const TestimonialCard = styled(motion.div)`
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: var(--primary);
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 5rem;
    color: var(--primary);
    opacity: 0.1;
    font-family: serif;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.1);
    opacity: 0.2;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  
  ${TestimonialCard}:hover & {
    color: var(--text);
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${TestimonialCard}:hover & {
    border-top-color: var(--primary);
  }
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  
  svg {
    width: 35px;
    height: 35px;
    transition: all 0.3s ease;
  }
  
  ${TestimonialCard}:hover & {
    transform: scale(1.1);
    border-color: var(--primary);
    background-color: var(--white);
    color: var(--primary);
  }
`;

const AuthorInfo = styled.div`
  h4 {
    font-size: 1.2rem;
    color: var(--primary);
    margin-bottom: 0.3rem;
    transition: all 0.3s ease;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }
  
  ${TestimonialCard}:hover & {
    h4 {
      transform: translateX(5px);
    }
    
    p {
      color: var(--text);
    }
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    border-radius: 2px;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled.a`
  color: var(--white);
  margin: 0 1rem;
  text-decoration: none;
  font-family: var(--font-secondary);
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  position: relative;
  
  &:hover {
    color: var(--primary);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;

// Adicionar styled component para a seção do iFood
const IfoodSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  padding: 2rem 1rem;
  background-color: var(--background);
  border-radius: 2rem;
`;
const IfoodLogo = styled.img`
  width: 90px;
  margin-bottom: 24px;
`;
const IfoodTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
  text-align: center;
`;
const IfoodText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 500px;
`;
const IfoodButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: #EA1D2C;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(234,29,44,0.15);
  transition: background 0.2s, transform 0.2s;
  gap: 1rem;
  &:hover {
    background: #b3131e;
    transform: scale(1.05);
  }
`;

// Footer styled components
const Footer = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: var(--white);
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: var(--font-primary);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: var(--secondary);
    }
  }
  
  p, a {
    color: #ccc;
    text-decoration: none;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 1.5rem;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  
  a {
    color: var(--primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  color: var(--white);
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const lastOffset = useRef({ x: 0, y: 0 });
  const [isCardapioOpen, setIsCardapioOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataReserva, setDataReserva] = useState("");
  const [numPessoas, setNumPessoas] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Funções para zoom e arrastar
  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.1, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.1, 1));

  const handleDragStart = (e: React.MouseEvent) => {
    dragStart.current = { x: e.clientX, y: e.clientY };
    document.body.style.cursor = 'grabbing';
  };
  const handleDrag = (e: React.MouseEvent) => {
    if (!dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setOffset({ x: lastOffset.current.x + dx, y: lastOffset.current.y + dy });
  };
  const handleDragEnd = () => {
    lastOffset.current = offset;
    dragStart.current = null;
    document.body.style.cursor = '';
  };
  const handleReset = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    lastOffset.current = { x: 0, y: 0 };
  };

  // Double click para zoom
  const handleDoubleClick = () => {
    setZoom((z) => (z < 2 ? 2 : 1));
  };

  // Arrastar só funciona se o modal estiver aberto
  const handleModalDragStart = (e: React.MouseEvent) => {
    if (!isCardapioOpen) return;
    dragStart.current = { x: e.clientX, y: e.clientY };
    document.body.style.cursor = 'grabbing';
  };
  const handleModalDrag = (e: React.MouseEvent) => {
    if (!isCardapioOpen || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setOffset({ x: lastOffset.current.x + dx, y: lastOffset.current.y + dy });
  };
  const handleModalDragEnd = () => {
    if (!isCardapioOpen) return;
    lastOffset.current = offset;
    dragStart.current = null;
    document.body.style.cursor = '';
  };

  // Fechar modal ao clicar fora
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsCardapioOpen(false);
      handleReset();
    }
  };

  return (
    <MainContainer>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <HeroSection id="hero">
            <ContentWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Casinha Mineira
              </Title>
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                O verdadeiro sabor mineiro em São Paulo
              </Subtitle>
              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Desde 1985, trazemos o autêntico sabor da culinária mineira para São Paulo. 
                Em um ambiente acolhedor e familiar, oferecemos pratos tradicionais preparados 
                com ingredientes frescos e muito carinho.
              </Description>
              <CTAButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as="a"
                href="https://wa.me/5511971345886?text=Olá,%20gostaria%20de%20fazer%20uma%20reserva"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer Reserva
              </CTAButton>
            </ContentWrapper>
            <ScrollIndicator
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={(e) => { e.preventDefault(); handleScroll(e, 'about'); }}
            >
              <span>Role para baixo</span>
            </ScrollIndicator>
          </HeroSection>
          
          <Nav>
            <NavLink onClick={(e) => handleScroll(e, 'hero')}>Início</NavLink>
            <NavLink onClick={(e) => handleScroll(e, 'about')}>Nossa História</NavLink>
            <NavLink onClick={(e) => handleScroll(e, 'special-dishes')}>Pratos Especiais</NavLink>
            <NavLink onClick={(e) => handleScroll(e, 'cardapio')}>Cardápio</NavLink>
            <NavLink onClick={(e) => handleScroll(e, 'gallery')}>Galeria</NavLink>
            <NavLink onClick={(e) => handleScroll(e, 'testimonials')}>Depoimentos</NavLink>
            <NavLink onClick={(e) => handleScroll(e, 'contact')}>Contato</NavLink>
            <NavLink onClick={(e) => handleScroll(e, 'map')}>Como Chegar</NavLink>
          </Nav>

          <AboutSection id="about">
            <AboutContainer>
              <AboutContent
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <AboutTitle
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Nossa História
                </AboutTitle>
                <AboutText
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Fundada em 1985, a Casinha Mineira nasceu do sonho de trazer o autêntico sabor da culinária mineira para São Paulo. Nossa história começou com Dona Maria, uma mineira de coração que trouxe consigo as receitas tradicionais de sua família.
                </AboutText>
                <AboutText
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Hoje, mantemos viva essa tradição, preparando cada prato com ingredientes frescos e muito carinho, exatamente como faziam nossas avós. Nossa missão é proporcionar uma experiência gastronômica única, onde cada refeição é uma viagem ao coração de Minas Gerais.
                </AboutText>
                
                <FeaturesGrid
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <FeatureItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <FeatureText>Ingredientes Frescos</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <FeatureText>Receitas Tradicionais</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <FeatureText>Ambiente Acolhedor</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <FeatureText>Preços Justos</FeatureText>
                  </FeatureItem>
                </FeaturesGrid>
              </AboutContent>
              
              <AboutImage
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img src="/assets/about-image.jpg" alt="Interior da Casinha Mineira" />
              </AboutImage>
            </AboutContainer>
          </AboutSection>

          <SpecialDishesSection id="special-dishes">
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nossos Pratos Especiais
            </SectionTitle>
            
            <DishesGrid>
              <DishCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <DishImage>
                  <img src="/assets/feijoada.jpg" alt="Feijoada Completa" />
                  <DishTag>Mais Pedido</DishTag>
                </DishImage>
                <DishContent>
                  <DishTitle>Feijoada Completa</DishTitle>
                  <DishDescription>
                    Nossa tradicional feijoada mineira, preparada com carnes selecionadas, 
                    feijão preto e acompanhamentos especiais.
                  </DishDescription>
                  <DishPrice>R$ 89,90</DishPrice>
                </DishContent>
              </DishCard>

              <DishCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <DishImage>
                  <img src="/assets/vaca-atolada.jpg" alt="Vaca Atolada" />
                  <DishTag>Especial</DishTag>
                </DishImage>
                <DishContent>
                  <DishTitle>Vaca Atolada</DishTitle>
                  <DishDescription>
                    Costela de boi cozida com mandioca, servida com arroz, 
                    tutu de feijão e couve refogada.
                  </DishDescription>
                  <DishPrice>R$ 79,90</DishPrice>
                </DishContent>
              </DishCard>

              <DishCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <DishImage>
                  <img src="/assets/lombo.jpg" alt="Lombo à Mineira" />
                  <DishTag>Destaque</DishTag>
                </DishImage>
                <DishContent>
                  <DishTitle>Lombo à Mineira</DishTitle>
                  <DishDescription>
                    Lombo de porco assado, acompanhado de arroz, tutu de feijão, 
                    torresmo crocante e couve refogada.
                  </DishDescription>
                  <DishPrice>R$ 85,90</DishPrice>
                </DishContent>
              </DishCard>
            </DishesGrid>
          </SpecialDishesSection>

          <CardapioSection id="cardapio">
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nosso Cardápio
            </SectionTitle>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
              <FlipContainer
                style={{
                  cursor: isCardapioOpen ? (zoom > 1 ? 'grab' : 'pointer') : 'pointer',
                  zIndex: isCardapioOpen ? 100 : 1,
                  position: isCardapioOpen ? 'relative' : 'static',
                  width: isCardapioOpen ? '70vw' : '100%',
                  height: isCardapioOpen ? '80vh' : '800px',
                  maxWidth: isCardapioOpen ? 900 : '100%',
                  maxHeight: isCardapioOpen ? 900 : '800px',
                  margin: isCardapioOpen ? '0 auto' : undefined,
                  transition: 'all 0.3s',
                  boxShadow: 'none',
                  background: 'none',
                  filter: 'none',
                  pointerEvents: 'auto',
                }}
                onClick={() => !isCardapioOpen && setIsCardapioOpen(true)}
              >
                <FlipCard flipped={flipped}>
                  <CardapioFace
                    style={{
                      transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`
                    }}
                    onMouseDown={isCardapioOpen ? handleModalDragStart : undefined}
                    onMouseMove={isCardapioOpen ? handleModalDrag : undefined}
                    onMouseUp={isCardapioOpen ? handleModalDragEnd : undefined}
                    onMouseLeave={isCardapioOpen ? handleModalDragEnd : undefined}
                    onDoubleClick={isCardapioOpen ? handleDoubleClick : undefined}
                  >
                    <img src="/assets/cardapio-frente.jpg" alt="Cardápio Frente" style={{ width: '100%', height: '100%', objectFit: 'contain', userSelect: 'none', pointerEvents: 'none', background: 'none' }} draggable={false} />
                  </CardapioFace>
                  <CardapioBack
                    style={{
                      transform: `rotateY(180deg) scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`
                    }}
                    onMouseDown={isCardapioOpen ? handleModalDragStart : undefined}
                    onMouseMove={isCardapioOpen ? handleModalDrag : undefined}
                    onMouseUp={isCardapioOpen ? handleModalDragEnd : undefined}
                    onMouseLeave={isCardapioOpen ? handleModalDragEnd : undefined}
                    onDoubleClick={isCardapioOpen ? handleDoubleClick : undefined}
                  >
                    <img src="/assets/cardapio-verso.jpg" alt="Cardápio Verso" style={{ width: '100%', height: '100%', objectFit: 'contain', userSelect: 'none', pointerEvents: 'none', background: 'none' }} draggable={false} />
                  </CardapioBack>
                </FlipCard>
                {/* Controles flutuantes só aparecem quando ampliado */}
                {isCardapioOpen && (
                  <ZoomControls style={{ position: 'absolute', top: 20, right: 20, zIndex: 200 }}>
                    <ZoomButton onClick={handleZoomIn} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </ZoomButton>
                    <ZoomButton onClick={handleZoomOut} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </ZoomButton>
                    <ZoomButton onClick={() => setFlipped((f) => !f)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a1 1 0 01-1.4 1.4l-7-7a1 1 0 011.4-1.4l7 7z" /></svg>
                    </ZoomButton>
                    <ZoomButton onClick={handleReset} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M20 20v-5h-.581M5.582 9A7.003 7.003 0 0012 19a7.003 7.003 0 006.418-10" /></svg>
                    </ZoomButton>
                    <ZoomButton onClick={() => { setIsCardapioOpen(false); handleReset(); }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </ZoomButton>
                  </ZoomControls>
                )}
              </FlipContainer>
            </div>
          </CardapioSection>

          <GallerySection id="gallery">
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nossa Galeria
            </SectionTitle>
            
            <GalleryGrid>
              <GalleryItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src="/assets/cachacas.jpg" alt="Cachaças da Casa" />
                <GalleryCaption>
                  <h3>Cachaças da Casa</h3>
                  <p>Nossa seleção especial de cachaças artesanais</p>
                </GalleryCaption>
              </GalleryItem>

              <GalleryItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img src="/assets/torresmo.jpg" alt="Torresmo da Casa" />
                <GalleryCaption>
                  <h3>Torresmo da Casa</h3>
                  <p>Nosso famoso torresmo crocante</p>
                </GalleryCaption>
              </GalleryItem>

              <GalleryItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img src="/assets/area-interna-1.jpg" alt="Área Interna - Primeiro Andar" />
                <GalleryCaption>
                  <h3>Área Interna</h3>
                  <p>Primeiro andar com ambiente acolhedor</p>
                </GalleryCaption>
              </GalleryItem>

              <GalleryItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <img src="/assets/picanha.jpg" alt="Picanha com Fritas" />
                <GalleryCaption>
                  <h3>Picanha com Fritas</h3>
                  <p>Nossa picanha grelhada na brasa</p>
                </GalleryCaption>
              </GalleryItem>

              <GalleryItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/assets/fachada.jpg" alt="Fachada do Restaurante" />
                <GalleryCaption>
                  <h3>Fachada</h3>
                  <p>Nossa casa mineira em São Paulo</p>
                </GalleryCaption>
              </GalleryItem>

              <GalleryItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <img src="/assets/sobremesas.jpg" alt="Sobremesas" />
                <GalleryCaption>
                  <h3>Sobremesas</h3>
                  <p>Doces e sobremesas tradicionais</p>
                </GalleryCaption>
              </GalleryItem>

              <GalleryItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <img src="/assets/area-interna-2.jpg" alt="Área Interna - Segundo Andar" />
                <GalleryCaption>
                  <h3>Área Interna</h3>
                  <p>Segundo andar com vista panorâmica</p>
                </GalleryCaption>
              </GalleryItem>
            </GalleryGrid>
          </GallerySection>

          <ContactSection id="contact">
            <ContactContainer>
              <ContactInfo
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ContactTitle
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Entre em Contato
                </ContactTitle>
                <ContactText
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Faça sua reserva ou entre em contato conosco. Estamos prontos para atendê-lo da melhor forma possível.
                </ContactText>
                
                <ContactDetails
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ContactItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Rua São Carlos do Pinhal, 445 – Bela Vista, São Paulo – SP</span>
                  </ContactItem>
                  <ContactItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>(11) 97134-5886</span>
                  </ContactItem>
                  <ContactItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>contato@casinhamineira.com.br</span>
                  </ContactItem>
                  <ContactItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                      Segunda a sexta: 11h30 às 15h<br />
                      Sábado e domingo: 12h às 16h
                    </span>
                  </ContactItem>
                </ContactDetails>
              </ContactInfo>

              <ContactForm
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onSubmit={e => {
                  e.preventDefault();
                  const message =
                    `Reserva/Contato Casinha Mineira:%0A` +
                    `Nome: ${nome}%0A` +
                    `Telefone: ${telefone}%0A` +
                    `Data da Reserva: ${dataReserva}%0A` +
                    `Número de Pessoas: ${numPessoas}%0A` +
                    `Mensagem: ${mensagem}`;
                  window.open(`https://wa.me/5511971345886?text=${message}`, '_blank');
                }}
              >
                <FormGroup>
                  <FormLabel>Nome</FormLabel>
                  <FormInput type="text" placeholder="Seu nome completo" required value={nome} onChange={e => setNome(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Telefone</FormLabel>
                  <FormInput type="tel" placeholder="(11) 99999-9999" required value={telefone} onChange={e => setTelefone(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Data da Reserva</FormLabel>
                  <FormInput type="date" required value={dataReserva} onChange={e => setDataReserva(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Número de Pessoas</FormLabel>
                  <FormInput type="number" min="1" max="20" required value={numPessoas} onChange={e => setNumPessoas(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Mensagem</FormLabel>
                  <FormTextarea placeholder="Observações especiais ou pedidos" value={mensagem} onChange={e => setMensagem(e.target.value)} />
                </FormGroup>
                <SubmitButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Fazer Reserva
                </SubmitButton>
              </ContactForm>
            </ContactContainer>

            <MapContainer
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              id="map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975844554717!2d-46.6521529!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMDcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>
          </ContactSection>
          
          <TestimonialsSection id="testimonials">
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              O Que Dizem Nossos Clientes
            </SectionTitle>
            
            <TestimonialsContainer>
              <TestimonialsGrid>
                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <TestimonialText>
                    Comida muito gostosa, porções muito bem servidas, preço justo. Atendimento atencioso. Lugar bem localizado e ambiente bem agradável.
                  </TestimonialText>
                  <TestimonialAuthor>
                    <AuthorImage>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </AuthorImage>
                    <AuthorInfo>
                      <h4>Carlos Eduardo</h4>
                      <p>15 de abril de 2024</p>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>

                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <TestimonialText>
                    Excelente comida por preço justo, serviço excelente, garçons educados e prestativos, comida chega rápido e nunca decepciona. O filé acebolado é uma opção sempre certeira, e eles são flexíveis em relação a mudança nos acompanhamentos, quando solicitado. O delivery também é muito bom, a comida chega rápido. Os pratos são bem servidos e é possível compartilhar em 2 pessoas.
                  </TestimonialText>
                  <TestimonialAuthor>
                    <AuthorImage>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </AuthorImage>
                    <AuthorInfo>
                      <h4>Matheus Monteiro</h4>
                      <p>10 de março de 2024</p>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>

                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <TestimonialText>
                    Excelente comida mineira! Ambiente acolhedor e atendimento impecável. Recomendo a todos que apreciam uma boa culinária caseira.
                  </TestimonialText>
                  <TestimonialAuthor>
                    <AuthorImage>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </AuthorImage>
                    <AuthorInfo>
                      <h4>João Pedro</h4>
                      <p>10 de fevereiro de 2024</p>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              </TestimonialsGrid>
            </TestimonialsContainer>
          </TestimonialsSection>

          <IfoodSection>
          <IfoodLogo src="/assets/ifood-logo.png" alt="iFood" />
            <IfoodTitle>Peça pelo iFood!</IfoodTitle>
            <IfoodText>
              Receba o melhor da culinária mineira no conforto da sua casa. Entrega rápida e pratos sempre fresquinhos!
            </IfoodText>
            <IfoodButton
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/casinha-mineira-bela-vista/2746bbe4-0ab7-42ad-afe6-15f7e73434ed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="white"/>
                <path d="M10.5 21.5L13.5 10.5H18.5L21.5 21.5H19.5L18.8 19H13.2L12.5 21.5H10.5ZM13.7 17.5H18.3L16.5 11.5H15.5L13.7 17.5Z" fill="#EA1D2C"/>
              </svg>
              Pedir no iFood
            </IfoodButton>
          </IfoodSection>

          <InstagramButton
            href="https://www.instagram.com/casinhamineira"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </InstagramButton>

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
            <FooterContainer>
              <FooterSection>
                <h3>Casinha Mineira</h3>
                <p>O verdadeiro sabor mineiro em São Paulo desde 1985. Tradição e qualidade em cada prato.</p>
                <SocialLinks>
                  <SocialLink href="https://www.instagram.com/casinhamineira" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 7.5h.01M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253M12 3a8.959 8.959 0 00-8.716 2.253M12 3a8.959 8.959 0 018.716 2.253M12 3a8.959 8.959 0 00-8.716 2.253" />
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://wa.me/5511971345886" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </SocialLink>
                </SocialLinks>
              </FooterSection>

              <FooterSection>
                <h3>Endereço</h3>
                <p>Rua São Carlos do Pinhal, 445</p>
                <p>Bela Vista, São Paulo – SP</p>
                <p>CEP: 01233-000</p>
              </FooterSection>

              <FooterSection>
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a sexta: 11h às 15h</p>
                <p>Sábado: 11h às 16h</p>
                <p>Domingo: Fechado</p>
              </FooterSection>

              <FooterSection>
                <h3>Contato</h3>
                <p>Telefone: (11) 97134-5886</p>
                <p>Email: contato@casinhamineira.com.br</p>
                <p>WhatsApp: (11) 97134-5886</p>
              </FooterSection>
            </FooterContainer>

            <FooterBottom>
              <p>&copy; 2024 Casinha Mineira. Todos os direitos reservados. | 
                <a href="#" onClick={(e) => { e.preventDefault(); handleScroll(e, 'hero'); }}> Início</a> | 
                <a href="#" onClick={(e) => { e.preventDefault(); handleScroll(e, 'about'); }}> Sobre</a> | 
                <a href="#" onClick={(e) => { e.preventDefault(); handleScroll(e, 'contact'); }}> Contato</a>
              </p>
            </FooterBottom>
          </Footer>
        </>
      )}
    </MainContainer>
  );
} 