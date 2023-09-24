// src/utils/submission.ts
export function submitForm(data: FormData): Promise<void> {
    // Add your submission logic here (e.g., sending data to a server)
    return new Promise<void>((resolve, reject) => {
      // Simulate a successful submission
      setTimeout(() => {
        console.log('Form data submitted:', data);
        resolve();
      }, 1000);
    });
  }
  