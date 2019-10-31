import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTodosPage } from './archive-todos.page';

describe('ArchiveTodosPage', () => {
	let component: ArchiveTodosPage;
	let fixture: ComponentFixture<ArchiveTodosPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ArchiveTodosPage ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ArchiveTodosPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
