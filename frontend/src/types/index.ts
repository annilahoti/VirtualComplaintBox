// frontend/src/types/index.ts
export interface Complaint {
    id: string;
    type: 'anonymous' | 'email';
    category: string;
    complaint: string;
    name?: string;
    email?: string;
    studentId?: string;
    createdAt: string;
  }
  
  export interface User {
    username: string;
    token: string;
  }