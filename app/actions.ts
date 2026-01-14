'use server';

import Airtable from 'airtable';

const base = new Airtable({
    apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
}).base(process.env.AIRTABLE_BASE_ID || '');

export async function submitRSVP(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;

    if (!name || !email) {
        return { error: 'Name and Email are required' };
    }

    try {
        await base(process.env.AIRTABLE_TABLE_NAME || 'RSVPs').create([
            {
                fields: {
                    Name: name,
                    Email: email,
                    Company: company || ''
                }
            }
        ]);

        return { success: true };
    } catch (error) {
        console.error('Airtable insertion error:', error);
        return { error: 'Failed to submit RSVP. Please try again later.' };
    }
}
