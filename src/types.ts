/**
 * Types representing structure of the premium landing page for Script Comercial Avançado
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  text: string;
  description: string;
}

export interface QualifyItem {
  id: string;
  title: string;
  description: string;
}

export interface DiagnosticMsg {
  sender: 'lead' | 'reception';
  text: string;
  time: string;
  status?: 'sent' | 'received' | 'read';
}
