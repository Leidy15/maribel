import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private db: AngularFireDatabase) {}
  getApp() {
    return this.db
      .object('/estrellas')
      .snapshotChanges()
      .pipe(
        map((data) => {
          return data.payload.val();
        })
      );
  }
  update(estrellas: any) {
    return this.db.object('/estrellas').update(estrellas);
  }
}
