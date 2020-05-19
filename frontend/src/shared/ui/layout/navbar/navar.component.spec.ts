import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStoreModule } from '@shared/store/app-store.module';
import { NavarComponent } from './navar.component';

describe('NavarComponent', () => {
  let component: NavarComponent;
  let fixture: ComponentFixture<NavarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppStoreModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [NavarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
