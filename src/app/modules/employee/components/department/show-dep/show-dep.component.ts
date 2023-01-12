import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent {

  constructor(private service: EmployeeService, private config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  DepartmentList: any = [];
  ModalTitle: string = '';
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  DepartmentIdFilter: string = "";
  DepartmentNameFilter: string = "";
  DepartmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
      console.log(data);
      this.DepartmentListWithoutFilter = data;
      this.DepartmentIdFilter = "";
      this.DepartmentNameFilter = "";
    });
  }

  open(content: any) {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  closeClick() {
    this.modalService.dismissAll('Close click');
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  editClick(content: any, item: any) {
    console.log(item);
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  deleteClick(item: any) {
    //console.log(item);
    if (confirm('Are you sure to delete??')) {
      this.service.deleteDepartment(item.departmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }


  FilterFn() {
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el: any) {
      return el.departmentId.toString().toLowerCase().includes(DepartmentIdFilter.toString().trim().toLowerCase()) &&
        el.departmentName.toString().toLowerCase().includes(DepartmentNameFilter.toString().trim().toLowerCase())
    });
  }

  sortResult(prop: any, asc: any) {
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
