import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  onClick: () => void;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface AiAnalysisResponse {
  score: number;
  summary: string;
  recommendation: string;
}

export type PageView = 'HOME' | 'PRIVACY' | 'TERMS';