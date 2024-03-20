const { ManageFiles } = require("../ManageFiles");

describe("Files to be managed.", () => {
   beforeAll(() => {
	  ManageFiles.path = "../dist";
   });
   describe("Should have a given path.", () => {
	  test("Should be set.", () => {
	  	 expect(ManageFiles.path).toBeTruthy();
	  });
	  test("Should not exist yet.", () => {
		 expect(ManageFiles.exists).toBeFalsy();
	  });
   });
   describe("Should be created.", () => {
	  test.todo("Should exist now.");
	  test.todo("Should create sub-files if given.");
   });
});
