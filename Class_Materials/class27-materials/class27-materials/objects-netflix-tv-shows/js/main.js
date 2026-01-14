//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow{
    constructor(title,location,genre,episodes){
        this.title = title
        this.location = location 
        this.genre = genre 
        this.episodes = episodes 
    
    }
    play(){
        console.log('Playing....')
    }
    stop(){
        console.log('Stopping...')
    }
    saveToList(){
        console.log('Saved To List')
    }
}


let bridgerton = new NetflixShow('Bridgerton', 'England', 'Romance', 25);
