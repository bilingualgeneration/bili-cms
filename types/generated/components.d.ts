import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsMultilingualText extends Schema.Component {
  collectionName: 'components_components_multilingual_texts';
  info: {
    displayName: 'multilingual text';
  };
  attributes: {
    language: Attribute.Enumeration<['en', 'es', 'es-inc']>;
    text: Attribute.Text;
  };
}

export interface ComponentsPages extends Schema.Component {
  collectionName: 'components_components_pages';
  info: {
    displayName: 'pages';
    description: '';
  };
  attributes: {
    text: Attribute.Component<'components.multilingual-text', true>;
    image: Attribute.Media;
    page_number: Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.multilingual-text': ComponentsMultilingualText;
      'components.pages': ComponentsPages;
    }
  }
}
