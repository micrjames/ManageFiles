import * as fs from "fs";

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

   static get isEmpty(): boolean {
	  let isEmpty: boolean;
	  fs.stat(this._path, (err: Error, stats: fs.Stats) => {
		 if(err) throw err;

		 isEmpty = stats.size == 0;
	  });
	  return isEmpty;
   }

   static create(): string {
	  if(!this.exists) {
		 fs.mkdir(this._path, { recursive: false }, (err: Error) => {
			if(err) throw err;
		 });
		 return `file at ${this._path} successfully created.`;
	  }
	  return `file at ${this._path} already exists.`; 
   }

   static read() {
	  fs.readdir(this._path, {}, (err: Error) => {
		 if(err) throw err;
	  });
   }
}
