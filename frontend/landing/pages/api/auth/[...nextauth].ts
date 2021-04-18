import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { User } from "next-auth";

export interface AuthenticatedUser extends User {
    accessToken?: string,
    refreshToken?: string,
}

const settings = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn(user, account, profile) {
            console.log("SIGNIN:", user, account, profile)
            return true;
        },
        async redirect(url, baseUrl) {
            console.log("REDIRECT:", url, baseUrl)
            return baseUrl
        },
        async session(session, user) {
            console.log("SESSION:", session, user)
            return session
        },
        async jwt(token, user, account, profile, isNewUser) {
            console.log("JWT:", token, user, account, profile, isNewUser)
            return token
        }
    }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, settings);


/*
async signIn(user: AuthenticatedUser, account, profile?) {
            // may have to switch it up a bit for other providers
            if (account.provider === "github") {
                // extract these two tokens
                const { accessToken, idToken } = account;

                // make a POST request to the DRF backend
                try {
                    const response = await axios.post(
                        // tip: use a seperate .ts file or json file to store such URL endpoints
                        "http://127.0.0.1:8000/api/social/login/google/",
                        {
                            access_token: accessToken, // note the differences in key and value variable names
                            id_token: idToken,
                        },
                    );

                    // extract the returned token from the DRF backend and add it to the `user` object
                    const { access_token } = response.data;
                    user.accessToken = access_token;

                    return true; // return true if everything went well
                } catch (error) {
                    return false;
                }
            }
            return false;
        },

        async jwt(token, user: AuthenticatedUser, account, profile, isNewUser) {
            if (user) {
                const { accessToken } = user;

                // reform the `token` object from the access token we appended to the `user` object
                token.accessToken = accessToken;
            }

            return token;
        },

        async session(session, user: AuthenticatedUser) {
            session.accessToken = user.accessToken;
            return session;
        },
 */