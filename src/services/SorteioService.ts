import CategoriaType from "../models/Categoria";
import ElementoType from "../models/Elemento";
import GrupoType from "../models/Grupo";

export function sortear(categorias: CategoriaType[], elementos: ElementoType[], numeroDeGrupos: number): GrupoType[] {
    let categoriasOrdenadas = sortearOrdemDeCategorias(categorias);
    let elementosOrdenados = sortearOrdemDeElementos(categoriasOrdenadas, elementos);
    let grupos = agruparElementos(elementosOrdenados, numeroDeGrupos);
    return grupos;
}

function sortearOrdemDeCategorias(categorias: CategoriaType[]): CategoriaType[] {
    let categoriasOrdenadas: CategoriaType[] = [];
    categorias.forEach(() => {
        let indice = Math.floor(Math.random() * categorias.length);
        categoriasOrdenadas.push(categorias[indice]);
        categorias = categorias.filter((categoria) => !categoriasOrdenadas.includes(categoria));
    });
    return categoriasOrdenadas;
}

function sortearOrdemDeElementos(categorias: CategoriaType[], elementos: ElementoType[]): ElementoType[] {
    let elementosOrdenados: ElementoType[] = [];
    categorias.forEach((categoria) => {
        let elementosDaMesmaCategoria = elementos.filter((elemento) => elemento.categoria.nome === categoria.nome);
        elementosDaMesmaCategoria.forEach(() => {
            let indice = Math.floor(Math.random() * elementosDaMesmaCategoria.length);
            elementosOrdenados.push(elementosDaMesmaCategoria[indice]);
            elementosDaMesmaCategoria = elementosDaMesmaCategoria.filter((elemento) => !elementosOrdenados.includes(elemento));
        });
    });
    return elementosOrdenados;
}

function agruparElementos(elementos: ElementoType[], numeroDeGrupos: number): GrupoType[] {
    let numerosDeGrupos: number[] = [];
    for (let i = 0; i < numeroDeGrupos; i++) {
        let numeroSorteado = Math.floor(Math.random() * numeroDeGrupos) + 1;
        if (numerosDeGrupos.includes(numeroSorteado)) {
            i--;
        } else {
            numerosDeGrupos.push(numeroSorteado);
        }
    }
    let grupos: GrupoType[] = [];
    for (let i = 0; i < numeroDeGrupos; i++) {
        grupos.push({
            elementos: elementos.filter((elemento, index) => index % numeroDeGrupos === i),
            numero: numerosDeGrupos[i]
        });
    }
    let gruposOrdenados = grupos.sort(function(a, b) {
        if (a.numero < b.numero) {
            return -1;
        } else if (a.numero > b.numero) {
            return 1;
        } else {
            return 0;
        }
    })
    return gruposOrdenados;
}