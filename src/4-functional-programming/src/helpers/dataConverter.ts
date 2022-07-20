import { Row } from "../components";
import { createUserHelpers } from "./createUserHelpers";

import type { Account, Image, User } from "../../types";
import type { userHelpersType } from "./types";

export const dataConverter = (
    users: User[], 
    images: Image[], 
    accounts: Account[]
): Row[] => {
    return users.reduce((result, user) => {
        const { 
            getPosts, 
            getAvatar, 
            getLastPayments 
        }: userHelpersType = createUserHelpers(user.userID);

        const row: Row = {
            name: user.name,
            posts: getPosts(accounts),
            avatar: getAvatar(images),
            country: user.country,
            username: user.username,
            lastPayments: getLastPayments(accounts)
        }

        return [ ...result, row]
    }, [])
};
