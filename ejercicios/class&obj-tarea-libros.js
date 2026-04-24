class Libro{
    constructor(titulo, autor, paginas)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    mostrarInfo(){
        console.log('El libro ' + this.titulo + ' del autor ' + this.autor + ' tiene ' + this.paginas + ' páginas');
    }
}

const libro = new Libro('"Comentarios al Naucrato"', 'Rebord, Tomas', 267);
const libro2 = new Libro('"El archivo de las tormentas"', 'Sanderson Brandon', 6000);

libro.mostrarInfo();
libro2.mostrarInfo();
