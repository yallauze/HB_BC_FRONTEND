export class Advert {
    constructor(
        public id: number = null,
        public title: string = "",
        public description: string = "",
        public year_started_at: number = null,
        public km: number = null,
        public price: number = null,
        public created_at: Date = null,
        public fuel_id: number = null,
        public model_id: number = null,
        public brand_id: number = null,
        public garage_id: number = null,
        public photos: string[] = []
    ){}
}