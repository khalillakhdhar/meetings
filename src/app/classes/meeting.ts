export class Meeting {
   id: number;
  titre: string;
  date_deb: Date;
  date_fin: Date;
  constructor(id,titre, date_deb, date_fin) {
    this.id = id;
    this.titre = titre;
    this.date_deb = date_deb;
    this.date_fin=date_fin


  }

}
