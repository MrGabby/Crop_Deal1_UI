export interface invoice{
  invoiceid:number;
  userid:any;
  farmerid:number;
  dealerid:number;
  quantity:string;
  price:any;
  payment_Mode?:string;
  status:string;
  crop_detailid:number;
  date_created:any;
  crop_Detail:{
    crop_detailid:number;
    crop_name:string;
    cropDetail_description:string;
    crop_type:string;
    quantity:number;
    price:any;
    location:string;
     crop?:any;
  }
}