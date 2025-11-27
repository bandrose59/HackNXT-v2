export interface Brochure {
  id: number;
  title: string;
  pdfUrl: string | null;
  description: string;
  comingSoon: boolean;
}

export const brochures: Brochure[] = [
  {
    id: 1,
    title: 'Event Brochure',
    pdfUrl:
      'https://drive.google.com/file/d/1mF9eQN0WibCNhpvY39b5p_dTNTZDfKCG/view?usp=sharing',
    description: 'Complete details about HackNXT 1.0',
    comingSoon: false,
  }
  
];
