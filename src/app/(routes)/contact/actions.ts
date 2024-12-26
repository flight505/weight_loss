'use server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // For now, we'll just log the form data
    // In production, you would send this to your email service or database
    console.log('Contact form submission:', formData);

    // Simulate a delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Tak for din besked. Vi vender tilbage hurtigst muligt.'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Der opstod en fejl. Prøv venligst igen senere.'
    };
  }
} 