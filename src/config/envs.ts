import 'dotenv/config';
import pkg from 'env-var';
// import * as process from "process";
const { get } = pkg;

// const isProduction = process.env.NODE_ENV === "production";

export const envs = {

    PORT: get('PORT').required().asPortNumber(),

    DB_PORT: get('DB_PORT').asPortNumber(),
    DB_DOCKER_PORT: get('DB_DOCKER_PORT').asPortNumber(),
    DB_HOST: get('DB_HOST').required().asString(),
    DB_USER_ROOT: get('DB_USER_ROOT').asString(),
    DB_DATABASE: get('DB_DATABASE').required().asString(),
    DB_USER: get('DB_USER').required().asString(),
    DB_PASSWORD: get('DB_PASSWORD').asString(),

}


// if (!isProduction) {
//     envs.DB_HOST = <string>get('DEV_DB_HOST').asString();
//     envs.DB_PORT = get('DEV_DB_PORT').asPortNumber();
//     envs.DB_USER = <string>get('DEV_DB_USER').asString();
//     envs.DB_PASSWORD = get('DEV_DB_PASSWORD').asString();
//     envs.DB_DATABASE = <string>get('DEV_DB_DATABASE').asString();
// }
//
// export { envs };