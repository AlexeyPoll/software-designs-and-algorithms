import type { Account, Image } from "../../types";

export type getPostsType = (accounts: Account[]) => number;

export type getAvatarType = (images: Image[]) => string;

export type getLastPaymentsType = (accounts: Account[]) => number;

export type createUserHelpersType = (userID: string) => userHelpersType;

export type userHelpersType = { 
    getPosts: getPostsType, 
    getAvatar: getAvatarType, 
    getLastPayments: getLastPaymentsType
}
