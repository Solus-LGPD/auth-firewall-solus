import { userinfo } from "@prisma/client";

export class User implements userinfo{
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    department: string;
    company: string;
    workphone: string;
    homephone: string;
    mobilephone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    notes: string;
    changeuserinfo: string;
    portalloginpassword: string;
    enableportallogin: number;
    creationdate: Date;
    creationby: string;
    updatedate: Date;
    updateby: string;
}
