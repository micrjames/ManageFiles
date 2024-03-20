const fs = require("fs");

export class ManageFiles {
   private static _path: string;

   static set path(path: string) {
	  this._path = path;
   }
   static get path(): string {
	  return this._path;
   }

   static get exists(): boolean {
	  return fs.existsSync(this._path);
   }
}
