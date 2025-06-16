import type { Schema, Struct } from '@strapi/strapi';

export interface AffirmationsAffirmationsCard extends Struct.ComponentSchema {
  collectionName: 'components_affirmations_affirmations_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text_back: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    >;
    text_front: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    >;
  };
}

export interface CommonMultilingualText extends Struct.ComponentSchema {
  collectionName: 'components_common_multilingual_texts';
  info: {
    description: '';
    displayName: 'multilingual text';
  };
  attributes: {
    language: Schema.Attribute.Enumeration<
      ['en', 'es', 'es-inc', 'en.es', 'en.es-inc']
    > &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonMultilingualTextAndAudio extends Struct.ComponentSchema {
  collectionName: 'components_common_multilingual_text_and_audios';
  info: {
    description: '';
    displayName: 'multilingual text and audio';
  };
  attributes: {
    audio: Schema.Attribute.Media<'audios'> & Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<
      ['en', 'es', 'es-inc', 'en.es', 'en.es-inc']
    > &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface CountWithMeAnimal extends Struct.ComponentSchema {
  collectionName: 'components_count_with_me_animals';
  info: {
    displayName: 'animal';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text_color: Schema.Attribute.String & Schema.Attribute.Required;
    x_percent: Schema.Attribute.Integer & Schema.Attribute.Required;
    y_percent: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface CountWithMeGroup extends Struct.ComponentSchema {
  collectionName: 'components_count_with_me_groups';
  info: {
    description: '';
    displayName: 'group';
  };
  attributes: {
    animals: Schema.Attribute.Component<'count-with-me.animal', true>;
    counting_text: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    >;
    counting_voice: Schema.Attribute.Enumeration<['gloria', 'walter']>;
    fact_background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    fact_text: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    >;
    game_background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    game_text: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    >;
    handle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface DndGamePiece extends Struct.ComponentSchema {
  collectionName: 'components_dnd_game_pieces';
  info: {
    description: '';
    displayName: 'Piece';
  };
  attributes: {
    audio_on_drag: Schema.Attribute.Media<'audios'> & Schema.Attribute.Required;
    audio_on_drop: Schema.Attribute.Media<'audios'> & Schema.Attribute.Required;
    count: Schema.Attribute.Integer & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntruderWordGroup extends Struct.ComponentSchema {
  collectionName: 'components_intruder_word_groups';
  info: {
    displayName: 'word group';
  };
  attributes: {
    intruder_audio: Schema.Attribute.Media<'audios'> &
      Schema.Attribute.Required;
    intruder_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    intruder_text: Schema.Attribute.String & Schema.Attribute.Required;
    word_2_audio: Schema.Attribute.Media<'audios'> & Schema.Attribute.Required;
    word_2_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    word_2_text: Schema.Attribute.String & Schema.Attribute.Required;
    word_3_audio: Schema.Attribute.Media<'audios'> & Schema.Attribute.Required;
    word_3_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    word_3_text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MultipleChoiceChoice extends Struct.ComponentSchema {
  collectionName: 'components_multiple_choice_choices';
  info: {
    description: '';
    displayName: 'choice';
  };
  attributes: {
    audio: Schema.Attribute.Media<'audios'>;
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isCorrect: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface StoryFactoryWordGroup extends Struct.ComponentSchema {
  collectionName: 'components_story_factory_word_groups';
  info: {
    displayName: 'word group';
  };
  attributes: {
    position: Schema.Attribute.Integer & Schema.Attribute.Required;
    word: Schema.Attribute.Component<'common.multilingual-text', true>;
  };
}

export interface StoryVocabularyListMultilingualTextAudioAndDefinition
  extends Struct.ComponentSchema {
  collectionName: 'components_story_vocabulary_list_multilingual_text_audio_and_definitions';
  info: {
    description: '';
    displayName: 'multilingual text audio and definition';
  };
  attributes: {
    definition: Schema.Attribute.Text & Schema.Attribute.Required;
    definition_audio: Schema.Attribute.Media<'audios'> &
      Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<
      ['en', 'es', 'es-inc', 'en.es', 'en.es-inc']
    >;
    syllable_breakdown: Schema.Attribute.String & Schema.Attribute.Required;
    word: Schema.Attribute.String & Schema.Attribute.Required;
    word_audio: Schema.Attribute.Media<'audios'> & Schema.Attribute.Required;
  };
}

export interface StoryVocabularyListWord extends Struct.ComponentSchema {
  collectionName: 'components_story_vocabulary_list_words';
  info: {
    description: '';
    displayName: 'word';
  };
  attributes: {
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    word: Schema.Attribute.Component<
      'story-vocabulary-list.multilingual-text-audio-and-definition',
      true
    >;
  };
}

export interface StoryOrderedTag extends Struct.ComponentSchema {
  collectionName: 'components_story_ordered_tags';
  info: {
    description: '';
    displayName: 'ordered tag';
  };
  attributes: {
    order: Schema.Attribute.Decimal;
    tag: Schema.Attribute.Enumeration<
      [
        'allAboutMe',
        'indigenousNarratives',
        'familyAndCommunity',
        'nature',
        'decodables',
      ]
    >;
  };
}

export interface StoryPage extends Struct.ComponentSchema {
  collectionName: 'components_story_pages';
  info: {
    description: '';
    displayName: 'page';
  };
  attributes: {
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface WouldDoQuestions extends Struct.ComponentSchema {
  collectionName: 'components_would_do_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    handle: Schema.Attribute.String;
    hint: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    > &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<
      'common.multilingual-text-and-audio',
      true
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'affirmations.affirmations-card': AffirmationsAffirmationsCard;
      'common.multilingual-text': CommonMultilingualText;
      'common.multilingual-text-and-audio': CommonMultilingualTextAndAudio;
      'count-with-me.animal': CountWithMeAnimal;
      'count-with-me.group': CountWithMeGroup;
      'dnd-game.piece': DndGamePiece;
      'intruder.word-group': IntruderWordGroup;
      'multiple-choice.choice': MultipleChoiceChoice;
      'story-factory.word-group': StoryFactoryWordGroup;
      'story-vocabulary-list.multilingual-text-audio-and-definition': StoryVocabularyListMultilingualTextAudioAndDefinition;
      'story-vocabulary-list.word': StoryVocabularyListWord;
      'story.ordered-tag': StoryOrderedTag;
      'story.page': StoryPage;
      'would-do.questions': WouldDoQuestions;
    }
  }
}
