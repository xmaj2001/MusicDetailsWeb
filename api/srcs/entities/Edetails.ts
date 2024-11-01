export default interface Edetails {
  title: string;            // Título da música
  artist: string;           // Nome do artista
  album: string;            // Nome do álbum
  year: string;             // Ano de lançamento
  genre: string;            // Gênero da música
  composer: string;         // Nome do compositor
  producer: string;         // Nome da produtora
  group: string;            // Nome do grupo ou banda
  bpm: string;              // BPM da música
  copyright: string;        // Informações de copyright
  cover: Blob | null;       // Arquivo de imagem para a capa da música
  lyrics?: string;          // Letra da música (opcional)
  comments?: string;        // Comentário sobre a música (opcional)
}

