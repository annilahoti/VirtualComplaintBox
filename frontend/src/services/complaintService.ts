// frontend/src/services/complaintService.ts
import api from './api';
import { Complaint } from '../types';

export const submitAnonymousComplaint = async (category: string, complaint: string) => {
  try {
    const response = await api.post('/complaints/anonymous', { category, complaint });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitEmailComplaint = async (
  name: string,
  email: string,
  studentId: string,
  category: string,
  complaint: string
) => {
  try {
    const response = await api.post('/complaints/email', {
      name,
      email,
      studentId,
      category,
      complaint,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllComplaints = async (): Promise<Complaint[]> => {
  try {
    const response = await api.get('/complaints');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComplaintsByType = async (type: 'anonymous' | 'email'): Promise<Complaint[]> => {
  try {
    const response = await api.get(`/complaints/type/${type}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};