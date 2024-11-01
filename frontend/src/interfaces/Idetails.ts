export default interface Idetails {
    title: string;    
    artist: string;   
    album: string;    
    year: string;     
    genre: string;    
    composer: string; 
    producer: string; 
    group: string;    
    bpm: string;      
    copyright: string;
    cover: Blob | null
    lyrics?: string;  
    comments?: string;
  }
  
  