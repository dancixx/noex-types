import { Asset } from './files';
export interface Guide {
    category: 'trainer' | 'nutrition' | 'regeneration' | 'supplements' | 'training';
    /**
     * @deprecated
     */
    createdBy?: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    description: string;
    elements: Array<GuideElement>;
    guideCoverUrl: Asset;
    isCore?: boolean;
    language: 'hu' | 'en';
    opened: number;
    overlayText: string;
    /**
     * @description
     * Only if noex guides is pinned for suggestion.
     */
    pinned?: boolean;
    sectionOrder: number;
    sectionUid: string;
    subTitle?: string;
    tierLevel: number;
    title: string;
    trainerComment?: {
        creationDate: {
            nanoseconds: number;
            seconds: number;
        };
        comment: string;
        updateDate: {
            nanoseconds: number;
            seconds: number;
        };
    };
    trainerUids?: string[];
    uid: string;
    /**
     * @deprecated
     */
    userUid?: string;
}
export interface GuidesSection {
    /**
     * @deprecated
     */
    createdBy: string;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    isCore?: boolean;
    order?: number;
    sectionTitle: string;
    sectionTitleEn?: string;
    uid: string;
    /**
     * @deprecated
     */
    userUid: string;
}
export interface GuideElement {
    type: 'text' | 'richText' | 'youtubeLink' | 'fileUploader' | 'textUrl';
    title: string;
    id: string;
    index?: number;
    text?: string;
    richText?: string;
    url?: string;
    youtubeLinks?: Array<GuideYoutubeLink>;
    images?: Array<Asset>;
}
export interface GuideYoutubeLink {
    link: string;
    start: string;
}
export interface GlobalGuideTrainerComment {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    comment: string;
    teamUid: string;
    trainerUid: string;
    uid: string;
    updateDate: {
        nanoseconds: number;
        seconds: number;
    };
}
