export {
    Profile,
    ProfileSchema
} from "./modle/types/profile";;

export { 
    profileReducer,
    profileActions,
} from "./modle/slice/profileSlice";

export {
    fetchProfileData
} from "./modle/services/fetchProfileData/fetchProfileData";

export { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export {getProfileData} from "./modle/selectors/getProfileData/getProfileData";
export {getProfileIsLoading} from "./modle/selectors/getProfileIsLoading/getProfileIsLoading";
export {getProfileError} from "./modle/selectors/getProfileError/getProfileError";