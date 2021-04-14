import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../../../app/services/home.service';
import { FormGroup,  FormBuilder,  Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router, private fb: FormBuilder) { 
    
  }

  form: any = FormGroup;
  defaultPortalSelectValue: any = 0;
  defaultTypeSelectValue: any = 0;
  defaultStartDate: any = [];
  defaultFinishDate: any = [];
  otherPromotionsString: any;
  backPromotionString: any;

  isLinear = false;
  firstFormGroup: any = FormGroup;
  secondFormGroup: any = FormGroup;
  
  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });

    this.defaultStartDate = localStorage.getItem('startDate');
    this.defaultFinishDate = localStorage.getItem('finishDate');
    this.otherPromotionsString = localStorage.getItem('otherPromotions');
    this.backPromotionString = localStorage.getItem('backPromotion');

    
    
    this.form = this.fb.group({
      marketingName: [localStorage.getItem('marketingName'), [Validators.required]],
      technicalName: [localStorage.getItem('technicalName'), [Validators.required]],
      description: [localStorage.getItem('description')],
      portal: [localStorage.getItem('portal')],
      type: [localStorage.getItem('type')],
      benefit: [localStorage.getItem('benefit')],
      startDate: [this.defaultStartDate == null ? undefined : new Date(this.defaultStartDate)],
      finishDate: [this.defaultFinishDate == null ? undefined : new Date(this.defaultFinishDate)],
      radio: [localStorage.getItem('radio') || '0'],
      otherPromotions: [JSON.parse(this.otherPromotionsString)],
      backPromotion: [JSON.parse(this.backPromotionString)]
    });

    this.defaultPortalSelectValue = localStorage.getItem('portal') == null ? 0 : localStorage.getItem('portal');
    this.defaultTypeSelectValue = localStorage.getItem('type');    
  }

  get controlsForm() { return this.form.controls; }

  checkFormValid() {
    if (this.form.controls.marketingName.status == 'VALID') {
      this.homeService.getAccess(true);
    } else {
      this.homeService.getAccess(false);
    }
  }

  saveFormValues(fieldName: string, value: any) {
    if (fieldName == "portal" || fieldName == "type") {
      localStorage.setItem(fieldName, value.target.options.selectedIndex);
    } else {
      localStorage.setItem(fieldName, value);
    }
  }

}
