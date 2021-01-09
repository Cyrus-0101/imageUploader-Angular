import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../http.service";

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	
	constructor(private formBuilder: FormBuilder, private http: HttpService) { }
	
	public msg: string = "";
	
	private form: FormGroup;
	
	ngOnInit() {
		this.form = this.formBuilder.group({
			profile: ['', [Validators.required]],
			name: ['', [Validators.required]]
		});
	}
	
	onFileSelect(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.form.get('profile').setValue(file);
		}
	}
	
	onSubmit() {
		if(!this.form.valid) { return this.msg = "The form requires a name AND a profile image."; }
		this.msg = "";
		
		const formData = new FormData();
		
		formData.append('image', this.form.get('profile').value);
		formData.append('name', this.form.get('name').value);
		
		this.http.registerUser(formData).subscribe(
			(res) => {
				if(res.name && res.image) {
					this.form.get("name").setValue("");
					this.msg = "Successfully created a user.";
				}
			},
			(err) => console.log(err)
		);
	}
	
	closeMessage() {
		this.msg = "";
	}
	
}
