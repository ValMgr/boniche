export type TemplateListResponse = {
  success: boolean;
  data: {
    templates: string[];
  };
};

export type CreateServerPayload = {
  name: string;
  template: string;
};

export type CreateServerResponse = {
  success: boolean;
};
