import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoginService {

    private _user;

    setCurrentUser(user) {
        this._user = user;
    }

    getCurrentUser() {
        return this._user;
    }
}