///<reference path="../typings/browser.d.ts"/>

import { bootstrap } from "angular2/platform/browser";
import { RootComponent } from "./root.component";
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(RootComponent, [ROUTER_PROVIDERS])
  .catch(err => console.error(err));
