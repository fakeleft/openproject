// -- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2018 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
// ++    Ng1FieldControlsWrapper,


import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {APP_INITIALIZER, Injector, NgModule} from "@angular/core";
import {AccessibleClickDirective} from "core-app/modules/a11y/accessible-click.directive";
import {AccessibleByKeyboardComponent} from "core-app/modules/a11y/accessible-by-keyboard.component";
import {initializeKeyboardShortcuts, KeyboardShortcutService} from "core-app/modules/a11y/keyboard-shortcut-service";
import {initializeUiRouterConfiguration} from "core-components/routing/ui-router.config";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
  ],
  exports: [
    AccessibleClickDirective,
    AccessibleByKeyboardComponent,
  ],
  providers: [
    KeyboardShortcutService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeyboardShortcuts,
      deps: [KeyboardShortcutService],
      multi: true
    }
  ],
  declarations: [
    AccessibleClickDirective,
    AccessibleByKeyboardComponent,
  ]
})
export class OpenprojectAccessibilityModule { }


