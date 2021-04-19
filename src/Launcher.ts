import {Server} from '../Server'

class Launcher {

	// classes have instance variables
	private name: string;
	server: Server;

	// classes have constructors that initialize our class
	constructor(){
		//initializinf our class Server in the constructor
		this.server = new Server();
	}
	

	// classes have methods


	public launchApp(){
		console.log("Started app");
		this.server.createServer();

		
		// this will allow to call anyhting from this class 
		// 1 of the last resorts, it is encouraged to use as less as possible
		// (this.server as any).somePrivateLogic();

	}


}

new Launcher().launchApp()