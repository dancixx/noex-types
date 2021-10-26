import { DocumentReference } from '@firebase/firestore-types';
import { Asset } from './files';
import { WeightLogData } from './measurements';
export interface UserChallenge {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    email: string;
    /**
     * @description
     * Only if challenge was closed.
     */
    endDate?: {
        nanoseconds: number;
        seconds: number;
    };
    /**
     * @description
     * Only if user checked in to the challenge.
     */
    goalDetails?: {
        cardio?: number | string;
        goal: string;
        note?: string;
        workoutPlace?: string;
        weeklyWorkoutsCount?: number;
    };
    /**
     * @description
     * Only if user checked in to the challenge.
     */
    initialState?: {
        age: number;
        bodyfat: number;
        checkInLog?: WeightLogData;
        dailyActivityPAL: number | string;
        dailySleepTime?: number;
        dailyStepCount?: number;
        height: number;
        note?: string;
        weeklyCardioTime?: number;
        weeklyWorkoutsCount?: number;
        weight: number;
    };
    isChallengeActive: boolean;
    messages?: {
        asstes: Asset[];
        creationDate: {
            nanoseconds: number;
            seconds: number;
        };
        isTrainer: boolean;
        isSeen: boolean;
        message: string;
        name: string;
        userProfilePicture: string;
        userUid: string;
    };
    name: string;
    processed: boolean;
    reference: DocumentReference;
    startDate: {
        nanoseconds: number;
        seconds: number;
    };
    submitted: boolean;
    uid: string;
    userUid: string;
}
export interface TeamChallenge {
    challengeImageUrls: Asset;
    challengers: {
        startDate: {
            nanoseconds: number;
            seconds: number;
        };
        name: string;
        reference: DocumentReference;
        userUid: string;
    }[];
    code: string;
    isChallengeActive: boolean;
    startDate: {
        nanoseconds: number;
        seconds: number;
    };
    title: string;
    uid: string;
}