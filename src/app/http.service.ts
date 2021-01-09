import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	
	constructor(private httpClient: HttpClient) { }
	
	public url = "http://localhost:3000";
	
	public getUsers() {
		return this.httpClient.get<any>(this.url + "/users");
	}
	
	public registerUser(formData) {
		return this.httpClient.post<any>(this.url + "/users/register", formData);
	}
}
