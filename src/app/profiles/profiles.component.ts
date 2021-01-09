import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "../http.service";

@Component({
	selector: 'app-profiles',
	templateUrl: './profiles.component.html',
	styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
	
	constructor(private http: HttpService) { }
	
	public profiles = [];
	
	ngOnInit() {
		this.http.getUsers().subscribe(
			(res) => this.profiles = res,
			(err) => console.log(err)
		);
	}
}
