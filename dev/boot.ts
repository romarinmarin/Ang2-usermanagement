///<reference path="../typings/browser.d.ts"/>

import { bootstrap } from "angular2/platform/browser";
import { RootComponent } from "./root.component";
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(RootComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS])
  .catch(err => console.error(err));
