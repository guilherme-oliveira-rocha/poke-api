export interface IPokemon {
    id: number,
    name: string,
    color: string,
    abilities: IAbilities,
    description: string,
    height: number,
    weight:number,
    image: string
  }
  
export interface IPokemons extends Array<IPokemon>{}
  
export interface IAbility {
    name: string,
  }
  
export interface IAbilities extends Array<IAbility>{}