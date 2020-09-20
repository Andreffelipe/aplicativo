/* eslint-disable prettier/prettier */
class Usuario {
    id?: string | undefined;
    name: string ;
    email: string ;
    steamid: string ;
    referal: string ;
    pontos: number ;

    constructor(_id: string, name: string, email: string,steamid: string, referal: string, pontos: number) {

        this.id = _id;
        this.name = name;
        this.email = email;
        this.steamid = steamid;
        this.referal = referal;
        this.pontos = pontos;
    }
}
export var user: Usuario | undefined = {
        'id': "agdgdg14dhsdh",
        'name': "Andre felipe",
        'email': "felipe.andre35@yahoo.com.br",
        'steamid': "felipe.andre35@yahoo.com.br",
        'referal': "SKINSLAB",
        'pontos' : 10000
};

export function setUser(id: string, name: string, email: string,steamid: string, referal: string, pontos: number) {
    user = new Usuario(id, name, email,steamid, referal, pontos);
}
