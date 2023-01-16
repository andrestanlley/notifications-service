import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade.');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    const content = 'Oiii';
    expect(() => new Content(content)).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    const content = 'a'.repeat(241);
    expect(() => new Content(content)).toThrow();
  });
});
