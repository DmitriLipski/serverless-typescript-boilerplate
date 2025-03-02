import type { Context, Callback } from 'aws-lambda';
import { main as handler } from './handler';

describe('Hello Handler', () => {
  it('should pass with mocked post request', async () => {
    const event = {
      headers: { 'Content-Type': 'application/json' },
      body: '{"name": "Bob"}',
    } as any;
    const context = {} as Context;
    const callback = null as Callback;

    const response = await handler(event, context, callback);

    expect(response).toMatchObject({
      body: '{"message":"Hello Bob, welcome to the exciting Serverless world!","event":{"headers":{"Content-Type":"application/json"},"body":{"name":"Bob"}}}',
      statusCode: 200,
    });
  });
});
