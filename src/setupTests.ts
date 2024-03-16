import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '@/mocks/server';
import '@/styles/globals.css';

beforeAll(() => server.listen()); // Enable mocking
afterEach(() => server.resetHandlers()); // Reset any request handlers
afterAll(() => server.close()); // Restore native request-issuing modules
