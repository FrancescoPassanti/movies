import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NextReleasesStoreModule } from '@features/store/next-releases/next-releases-store.module';
import { AppStoreModule } from '@shared/store/app-store.module';
import { CarouselModule } from '@shared/ui/components/carousel/carousel.module';
import { NextReleasesComponent } from './next-releases.component';

describe('NextReleasesComponent', () => {
  let component: NextReleasesComponent;
  let fixture: ComponentFixture<NextReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppStoreModule,
        NextReleasesStoreModule,
        CarouselModule
      ],
      declarations: [NextReleasesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
