import type { Account, Image, Payment } from "../../types";
import type { createUserHelpersType, getAvatarType, getLastPaymentsType, getPostsType, userHelpersType } from "./types";

const getPosts = (userID: string): getPostsType => 
    (accounts: Account[]): number => accounts.find(account => account.userID === userID).posts;

const getAvatar = (userID: string): getAvatarType => 
    (images: Image[]): string => images.find(image => image.userID === userID).url;

const getLastPayments = (userID: string): getLastPaymentsType => 
    (accounts: Account[]): number => {
        const payments: Payment[] = accounts.find(account => account.userID === userID).payments;
        const paymentsDates: number[] = payments.map(({ date }) => new Date(date).getTime());
        const latesPaymentIndex: number = paymentsDates.indexOf(Math.max(...paymentsDates));

        return payments[latesPaymentIndex]?.totalSum || 0;
    };

export const createUserHelpers: createUserHelpersType = (userID: string): userHelpersType => {
    return {
        getPosts: getPosts(userID),
        getAvatar: getAvatar(userID),
        getLastPayments: getLastPayments(userID)
    }
}