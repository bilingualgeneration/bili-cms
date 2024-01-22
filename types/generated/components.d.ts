import type { Schema, Attribute } from '@strapi/strapi';

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
    intruder_image: Attribute.Media & Attribute.Required;
    intruder_text: Attribute.String & Attribute.Required;
    intruder_audio: Attribute.Media & Attribute.Required;
    word_2_image: Attribute.Media & Attribute.Required;
    word_2_text: Attribute.String & Attribute.Required;
    word_2_audio: Attribute.Media & Attribute.Required;
    word_3_image: Attribute.Media & Attribute.Required;
    word_3_text: Attribute.String & Attribute.Required;
    word_3_audio: Attribute.Media & Attribute.Required;
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
    position: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 4;
      }> &
      Attribute.DefaultTo<1>;
    word: Attribute.Component<'common.multilingual-text', true>;
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

export interface WouldDoGameQuestions extends Schema.Component {
  collectionName: 'components_would_do_game_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    question: Attribute.Component<'common.multilingual-text', true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'common.multilingual-text-and-audio': CommonMultilingualTextAndAudio;
      'common.multilingual-text': CommonMultilingualText;
      'intruder-game.word-group': IntruderGameWordGroup;
      'memory-game.words': MemoryGameWords;
      'story-factory-game.word-group': StoryFactoryGameWordGroup;
      'story.pages': StoryPages;
      'would-do-game.questions': WouldDoGameQuestions;
    }
  }
}
