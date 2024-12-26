'use server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('Required fields are missing');
  }

  try {
    // For now, we'll just log the form data
    // In production, you would send this to your email service or database
    console.log('Contact form submission:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message
    });

    // Simulate a delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Tak for din besked. Vi vender tilbage hurtigst muligt.'
    };
  } catch (err) {
    console.error('Server error processing contact form:', err);
    throw err;
  }
} 