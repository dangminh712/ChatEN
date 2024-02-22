

export type Course = {
    ID: string,
    Name: string,
    Photo: string,
    Price: number,
    Discount: number,
    Rating: number
}
export type CourseDetail = {
    ID: string,
    Name: string,
    Photo: string,
    Price: number,
    Discount: number,
    Rating: string,
    Description:string,
    Author:string,
}
export type BuyCourse = {
    IDCourse: string,
    IDPerson: string,
    DateBuy:Date,
    Price: number,
}
export type BuyCourseDetail = {
    IDCourse: string,
    IDPerson: string,
    DateBuy:Date,
    Price: number,
    course: CourseDetail
}
export type getBuy = {
    ID: string,
    Name: string,
    Photo: string,
    Price: number,
    Discount: number,
    Rating: number,
    DateBuy:Date,
}