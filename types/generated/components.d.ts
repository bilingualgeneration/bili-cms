import type { Schema, Attribute } from '@strapi/strapi';

export interface AffirmationsAffirmationsCard extends Schema.Component {
  collectionName: 'components_affirmations_affirmations_cards';
  info: {
    displayName: 'affirmations_card';
    description: '';
  };
  attributes: {
    text_front: Attribute.Component<'common.multilingual-text-and-audio', true>;
    text_back: Attribute.Component<'common.multilingual-text-and-audio', true>;
    image: Attribute.Media;
  };
}

export interface CommonMultilingualTextAndAudio extends Schema.Component {
  collectionName: 'components_common_multilingual_text_and_audios';
  info: {
    displayName: 'multilingual text and audio';
    description: '';
  };
  attributes: {
    language: Attribute.Enumeration<['en', 'en-inc', 'es', 'es-inc']> &
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
    language: Attribute.Enumeration<['en', 'en-inc', 'es', 'es-inc']> &
      Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface CountWithMeGameAnimalGroup extends Schema.Component {
  collectionName: 'components_count_with_me_game_animal_groups';
  info: {
    displayName: 'animal_group';
    description: '';
  };
  attributes: {
    game_text: Attribute.Component<'common.multilingual-text-and-audio', true> &
      Attribute.Required;
    fact_text: Attribute.Component<'common.multilingual-text-and-audio', true> &
      Attribute.Required;
    animals: Attribute.Component<'count-with-me-game.animals', true>;
    game_background_image: Attribute.Media & Attribute.Required;
    fact_background_image: Attribute.Media & Attribute.Required;
    counting_text: Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    >;
    counting_voice: Attribute.String;
  };
}

export interface CountWithMeGameAnimals extends Schema.Component {
  collectionName: 'components_count_with_me_game_animals';
  info: {
    displayName: 'animals';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text_color: Attribute.String & Attribute.Required;
    x_percent: Attribute.Integer;
    y_percent: Attribute.Integer;
  };
}

export interface DragNDropGameDragNDropSegment extends Schema.Component {
  collectionName: 'components_drag_n_drop_game_drag_n_drop_segments';
  info: {
    displayName: 'Drag N Drop Segment';
  };
  attributes: {
    text: Attribute.String;
    image: Attribute.Media;
    audio_on_drag: Attribute.Media;
    audio_on_drop: Attribute.Media;
    language: Attribute.String;
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

export interface StoryVocabularyListMultilingualTextAudioAndDefinition
  extends Schema.Component {
  collectionName: 'components_story_vocabulary_list_multilingual_text_audio_and_definitions';
  info: {
    displayName: 'multilingual text audio and definition';
  };
  attributes: {
    word: Attribute.String & Attribute.Required;
    definition: Attribute.Text & Attribute.Required;
    word_audio: Attribute.Media & Attribute.Required;
    definition_audio: Attribute.Media & Attribute.Required;
    language: Attribute.Enumeration<['es', 'es-inc', 'en']>;
  };
}

export interface StoryVocabularyListWord extends Schema.Component {
  collectionName: 'components_story_vocabulary_list_words';
  info: {
    displayName: 'word';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    word: Attribute.Component<
      'story-vocabulary-list.multilingual-text-audio-and-definition',
      true
    >;
    handle: Attribute.String & Attribute.Required;
  };
}

export interface StoryDndLetters extends Schema.Component {
  collectionName: 'components_story_dnd_letters';
  info: {
    displayName: 'dnd_letters';
    description: '';
  };
  attributes: {
    letter: Attribute.Component<'common.multilingual-text-and-audio', true>;
  };
}

export interface StoryMultisyllableChoice extends Schema.Component {
  collectionName: 'components_story_multisyllable_choices';
  info: {
    displayName: 'multisyllable-choice';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    audio: Attribute.Media;
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
    text: Attribute.Component<'common.multilingual-text-and-audio', true>;
  };
}

export interface WouldDoGameQuestions extends Schema.Component {
  collectionName: 'components_would_do_game_questions';
  info: {
    displayName: 'questions';
    description: '';
  };
  attributes: {
    question: Attribute.Component<'common.multilingual-text-and-audio', true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'affirmations.affirmations-card': AffirmationsAffirmationsCard;
      'common.multilingual-text-and-audio': CommonMultilingualTextAndAudio;
      'common.multilingual-text': CommonMultilingualText;
      'count-with-me-game.animal-group': CountWithMeGameAnimalGroup;
      'count-with-me-game.animals': CountWithMeGameAnimals;
      'drag-n-drop-game.drag-n-drop-segment': DragNDropGameDragNDropSegment;
      'intruder-game.word-group': IntruderGameWordGroup;
      'memory-game.words': MemoryGameWords;
      'story-factory-game.word-group': StoryFactoryGameWordGroup;
      'story-vocabulary-list.multilingual-text-audio-and-definition': StoryVocabularyListMultilingualTextAudioAndDefinition;
      'story-vocabulary-list.word': StoryVocabularyListWord;
      'story.dnd-letters': StoryDndLetters;
      'story.multisyllable-choice': StoryMultisyllableChoice;
      'story.pages': StoryPages;
      'would-do-game.questions': WouldDoGameQuestions;
    }
  }
}
