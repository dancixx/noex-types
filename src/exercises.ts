import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {Asset} from './files';
import {WorkoutExerciseSet} from './workouts';

/**
 * @description
 * The Exercise object.
 */
export interface Exercise {
  creationDate: {
    seconds: number;
    nanoseconds: number;
  };
  /**
   * @description
   * Only if user added the exercise.
   */
  description?: string;
  dmgAbductor: number;
  dmgAbs: number;
  dmgAdductor: number;
  dmgBiceps: number;
  dmgCalves: number;
  dmgCore: number;
  dmgForearms: number;
  dmgFrontDelt: number;
  dmgGlutes: number;
  dmgHamstrings: number;
  dmgLats: number;
  dmgLowerBack: number;
  dmgLowerChest: number;
  dmgNeck: number;
  dmgObliques: number;
  dmgQuads: number;
  dmgRearDelt: number;
  dmgRotatorCuff: number;
  dmgSideDelt: number;
  dmgTriceps: number;
  dmgUpperBack: number;
  dmgUpperChest: number;
  equipmentType: string;
  equipmentUrls: Asset;
  exerciseNumber: string;
  exerciseType: string;
  femaleOpen: number;
  id?: string;
  isCore: boolean;
  isDev: boolean;
  lateralType: string;
  levelType: string;
  mainMuscleType: string;
  maleOpen: number;
  manAssetsUrls?: Asset[];
  manThumbsUrls: Asset;
  muscleManThumbsUrls: Asset;
  muscleWomanThumbsUrls: Asset;
  mechanismType: string;
  movementType: string;
  posterImagesMan?: Asset[];
  posterImagesWoman?: Asset[];
  setType: 'WRR' | 'RR' | 'DR';
  shortInfo: string;
  shortInfoEn: string;
  similarExerciseType: string;
  similarNames?: string;
  similarNamesEn?: string;
  similarNamesGeneratedHu?: string;
  similarNamesGeneratedEn?: string;
  supportedType: string;
  tags: string[];
  title: string;
  titleEn: string;
  uid: string;
  updateDate?: FirebaseFirestoreTypes.Timestamp;
  womanAssetsUrls?: Asset[];
  womanThumbsUrls: Asset;
  /**
   * @description
   * Only if user addded the exercise.
   */
  youtubeLink?: string;
  youtubeLinks?: {
    link?: string;
    start?: string;
  }[];
}

export interface ExerciseDescriptionElement {
  type: 'text' | 'richText' | 'youtubeLink' | 'fileUploader' | 'textUrl';
  title: string;
  id: string;
  index?: number;
  text?: string;
  richText?: string;
  url?: string;
  youtubeLinks?: ExerciseYoutubeLink[];
  images?: Asset[];
}

/**
 * @description
 * Exercise-History object.
 */
export interface ExerciseHistory {
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  exerciseNote?: string;
  exerciseSets: WorkoutExerciseSet[];
  exerciseUid: string;
  uid: string;
  userUid: string;
  workoutUid: string;
  workoutTitle: string;
}

/**
 * @description
 * Attached youtube link object.
 */
export interface ExerciseYoutubeLink {
  link: string;
  start: string;
}
