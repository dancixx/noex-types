import {Asset, TeamFile} from './files';

export interface Post {
  /**
   * @description
   * For fast calculation of comments in posts.
   */
  comments: number;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  /**
   * @description
   * Only for NOEX posts.
   */
  isCore?: boolean;
  /**
   * @description
   * Only for NOEX posts.
   */
  isDev?: boolean;
  likes?: {
    userProfilePicture: string | null;
    userName: string;
    userUid: string;
  }[];
  post?: string;
  sharedCameraPhoto?: Asset | null;
  sharedMedia?: Asset[] | TeamFile[] | null;
  /**
   * @description
   * If trainer post.
   */
  teamUid?: string;
  /**
   * @description
   * Only for NOEX posts.
   */
  teamUids?: string[];
  /**
   * @description
   * If trainer post.
   */
  trainerUid?: string;
  uid: string;
  userName: string;
  userProfilePicture: string;
  userUid: string;
  youtubeLink: string;
}

export interface Comment {
  comment: string;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  likes?: string[];
  postUid: string;
  reply:
    | string
    | {
        reply: string;
        toUserName: string;
        toUserUid: string;
      };
  sharedCameraPhoto?: Asset | TeamFile | null;
  sharedMedia?: Asset | TeamFile | null;
  teamUid: string;
  trainerUid: string;
  uid: string;
  userName: string;
  userProfilePicture: string;
  userUid: string;
}

export interface Reply {
  commentUid: string;
  creationDate: {
    nanoseconds: number;
    seconds: number;
  };
  likes?: string[];
  postUid: string;
  reply:
    | string
    | {
        reply: string;
        toUserName: string;
        toUserUid: string;
      };
  sharedCameraPhoto?: Asset | null;
  sharedMedia?: Asset | null;
  teamUid: string;
  trainerUid: string;
  uid: string;
  userName: string;
  userProfilePicture: string;
  userUid: string;
}
