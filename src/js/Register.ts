class Register
{
	public id : string;
    public typeID: string;       
    constructor(public username: string,
        public phoneNumber: string,
        public password: string,
        public confirmedPassword: string) {

    	this.id	 = Guid.newGuid();
        this.typeID = "CAE77047-222F-4FF0-86BB-CD2DD5D21ABF";
    }   
}