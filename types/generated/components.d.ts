import type { Schema, Attribute } from '@strapi/strapi';

export interface BingoGameWords extends Schema.Component {
  collectionName: 'components_bingo_game_words';
  info: {
    displayName: 'words';
  };
  attributes: {
    word: Attribute.Component<'common.multilingual-text-and-audio', true>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface CommonMultilingualTextAndAudio extends Schema.Component {
  collectionName: 'components_common_multilingual_text_and_audios';
  info: {
    displayName: 'multilingual text and audio';
    description: '';
  };
  attributes: {
    language: Attribute.Enumeration<['en', 'es', 'es-inc']> &
      Attribute.Required;
    text: Attribute.String & Attribute.Required;
    audio: Attribute.Media & Attribute.Required;
  };
}

export interface CommonMultilingualText extends Schema.Component {
  collectionName: 'components_components_multilingual_texts';
  info: {
    displayName: 'multilingual text';
    description: '';
  };
  attributes: {
    language: Attribute.Enumeration<['en', 'es', 'es-inc']> &
      Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface IntruderGameWordGroup extends Schema.Component {
  collectionName: 'components_intruder_game_word_groups';
  info: {
    displayName: 'word group';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    word: Attribute.Component<'common.multilingual-text-and-audio', true>;
  };
}

export interface MemoryGameWords extends Schema.Component {
  collectionName: 'components_memory_game_words';
  info: {
    displayName: 'words';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    word: Attribute.Component<'common.multilingual-text-and-audio', true>;
  };
}

export interface StoryFactoryGameWordGroup extends Schema.Component {
  collectionName: 'components_story_factory_game_word_groups';
  info: {
    displayName: 'word group';
    description: '';
  };
  attributes: {
    word: Attribute.Component<'common.multilingual-text-and-audio', true>;
    position: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMax<{
        min: 1;
      }> &
      Attribute.DefaultTo<1>;
  };
}

export interface StoryPages extends Schema.Component {
  collectionName: 'components_components_pages';
  info: {
    displayName: 'page';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    page_number: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMax<{
        min: 1;
      }> &
      Attribute.DefaultTo<1>;
    text: Attribute.Component<'common.multilingual-text-and-audio', true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'bingo-game.words': BingoGameWords;
      'common.multilingual-text-and-audio': CommonMultilingualTextAndAudio;
      'common.multilingual-text': CommonMultilingualText;
      'intruder-game.word-group': IntruderGameWordGroup;
      'memory-game.words': MemoryGameWords;
      'story-factory-game.word-group': StoryFactoryGameWordGroup;
      'story.pages': StoryPages;
    }
  }
}
