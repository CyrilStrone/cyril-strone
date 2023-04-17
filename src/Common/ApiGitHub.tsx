import { axiosInstance } from "./AxiosInstance"

export interface IApiGitHub {
    profile: string
    repo: string
}
export const ApiGitHub = async (params: IApiGitHub) => {
    return axiosInstance.get(
        `${params.profile}/${params.repo}`)
        .then((res: any) => { return (res.data.stargazers_count) })
        .catch(() => {
            console.log("ApiGitHub error")
        })
}
