
export default interface MusicData {
    title: string;                     // Título da música
    artist: string;                    // Nome do artista
    album: string;                     // Nome do álbum
    originalArtist: string;            // Artista original (caso seja um cover ou remix)
    year: string;                      // Ano de lançamento (usando string para aceitar formatos variados)
    genre: string;                     // Gênero da música
    comment: CommentData;              // Comentários sobre a música
    image: ImageData;                  // Informações sobre a imagem da capa
  }
  
  interface CommentData {
    language: string;                  // Idioma do comentário (ex: "eng" para inglês)
  }
  
  interface ImageData {
    mime: string;                      // Tipo MIME da imagem (ex: "image/png")
    type: ImageType;                   // Tipo da imagem (ex: capa frontal)
    description: string;               // Descrição da imagem (ex: "cover")
    imageBuffer: BufferData;           // Buffer para armazenar dados da imagem
  }
  
  interface ImageType {
    id: number;                        // ID do tipo de imagem (ex: 3 para capa frontal)
    name: string;                      // Nome do tipo de imagem (ex: "front cover")
  }
  
  interface BufferData {
    type: string;                      // Tipo de buffer (ex: "Buffer")
    data: number[];                    // Dados do buffer como um array de números
  }
  