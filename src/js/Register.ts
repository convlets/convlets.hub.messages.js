class Register implements IConvletCommand
{
	private id: string;
    public get ID() {
        return this.id;
    }
    public set ID(value) {
        this.id = value;
    }

    public get TypeID() {
        return "CAE77047-222F-4FF0-86BB-CD2DD5D21ABF";
    }  

	private username: string;
    public get UserName() {
        return this.username;
    }
    public set UserName(value) {
        this.username = value;
    }    
}