interface Condition {
  symptoms: string[];
  diagnosis: string;
  medications: string[];
  homeRemedies: string[];
}

class HealthcareService {
  private conditions: Condition[] = [
    {
      symptoms: ['headache', 'pain', 'head pain'],
      diagnosis: 'You might be experiencing a headache.',
      medications: ['Acetaminophen', 'Ibuprofen'],
      homeRemedies: [
        'Rest in a quiet, dark room',
        'Apply a cold or warm compress',
        'Stay hydrated',
        'Practice relaxation techniques'
      ]
    },
    {
      symptoms: ['fever', 'temperature', 'hot'],
      diagnosis: 'You appear to have a fever.',
      medications: ['Acetaminophen', 'Ibuprofen'],
      homeRemedies: [
        'Rest',
        'Stay hydrated',
        'Use a light blanket',
        'Take a lukewarm bath'
      ]
    },
    {
      symptoms: ['cough', 'coughing'],
      diagnosis: 'You seem to have a cough.',
      medications: ['Dextromethorphan', 'Guaifenesin'],
      homeRemedies: [
        'Honey and warm water',
        'Steam inhalation',
        'Stay hydrated',
        'Use a humidifier'
      ]
    }
  ];

  getDiagnosis(symptoms: string): string {
    const lowerSymptoms = symptoms.toLowerCase();
    
    for (const condition of this.conditions) {
      if (condition.symptoms.some(symptom => lowerSymptoms.includes(symptom))) {
        return `${condition.diagnosis}\n\nRecommended medications:\n${condition.medications.join(', ')}\n\nHome remedies:\n- ${condition.homeRemedies.join('\n- ')}`;
      }
    }
    
    return "I'm sorry, but I couldn't identify your symptoms. Please consult a healthcare professional for proper diagnosis and treatment.";
  }
}

export const healthcareService = new HealthcareService();