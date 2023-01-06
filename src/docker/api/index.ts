import type { TemplateListResponse, CreateServerPayload, CreateServerResponse } from '@docker/types';

export const getTemplateList = async (): Promise<TemplateListResponse> =>
  await fetch('/api/v1/template/list').then((res) => res.json());

export const createServer = async (body: CreateServerPayload): Promise<CreateServerResponse> =>
  await fetch('/api/v1/docker/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
