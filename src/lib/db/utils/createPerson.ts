import { Person, Intent } from '../models/Person';
import type { Friend } from '$lib/types';

interface CreatePersonInput {
  name: string;
  body?: string;
  intent?: Intent;
  birthday?: Date | null;
  mnemonic?: string | null;
}

export async function createPerson(input: CreatePersonInput): Promise<Friend> {
  try {
    const person = await Person.create({
      name: input.name,
      body: input.body || 'Add a description',
      intent: input.intent || Intent.NEW,
      birthday: input.birthday || null,
      mnemonic: input.mnemonic || null
    });

    return person.toJSON() as Friend;
  } catch (error) {
    console.error('Error creating person:', error);
    throw new Error('Failed to create person');
  }
} 