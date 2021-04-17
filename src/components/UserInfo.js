import {profileName, profileJob} from "../utils/helpers";

class UserInfo{
   constructor ({userName, userJob}){
       this._userName = userName;
       this._userJob = userJob;
   }

   getUserInfo(){
        return({userName: this._userName, userJob: this._userJob});
   }

   setUserInfo({userName, userJob}) {
     this._userName = userName;
     this._userJob = userJob;
   }
}

export {UserInfo};
