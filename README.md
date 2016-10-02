## Code to reproduce angular compiler issue

### Description

Let's suppose we have to following modules:

```
AppModule
  -> imports FeatureModule
     -> import SubFeatureModule
```

`FeatureModule` has routes definitions

`SubFeatureModule` has component and router guard (resolve). Component declares its resolves via static field (to keep it in one place)

So `FeatureModule` declares a route, that lands to the component from `SubFeatureModule` and resolves given guard.

In runtime (browser-dynamic) everything works as expected. But when we compile with angular-compiler, among imports duplicate entry appears for resolver, and it has wrong path.

Although, resolution via static fields in AoT in other cases works fine, I could not figure out why it fails in this case.

### Steps to reproduce

This repository contains minimal code to reproduce this issue.

To reproduce bug:

```
npm run compile
```

Than in generated file `app.module.ngfactory.ts`:

```ts
...
import * as import5 from './bad/inner/bad.resolver';
...
import * as import9 from '../bad.resolver'; // wrong entry
```
