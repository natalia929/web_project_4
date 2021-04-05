import {profileName, profileJob} from "./helpers";

class UserInfo{
   constructor ({userName, userJob}){
       this._userName = userName;
       this._userJob = userJob;
   }

   getUserInfo(){
        return({userName: this._userName, userJob: this._userJob});
   }

   setUserInfo(){
        profileName.textContent = this._userName;
        profileJob.textContent = this._userJob;
   }
}

export {UserInfo};
