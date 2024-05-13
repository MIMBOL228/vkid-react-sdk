import {getVKIDConfig} from "./getVKIDConfig.ts";
import {buildAuthLink} from "./buildAuthLink.ts";
import {generateRandomString} from "./generateRandomString.ts";
import {AUTH_MAGIC_NUMBER} from "./constants.ts";

export const generateAuthLink = () => {
    const vk_auth_config = getVKIDConfig();
    if (!vk_auth_config) return null;

    return buildAuthLink({
        app_id: vk_auth_config.appId,
        redirect_uri: vk_auth_config.redirectUrl,
        redirect_state: vk_auth_config.state,
        uuid: generateRandomString(AUTH_MAGIC_NUMBER),
    })
}