export type datachat = {
    inde: number,
    userchat: string,
    botchat: string
}
export type dicchat = {
    inde: number,
    userchat: string,
    botchat:  sentences[]
}
export type sentences = {
    _id: string,
    fields: {
        en: string,
        vi: string
    }
}
export type dataTraCau = {
    language: string,
    sentences: sentences[];
    suggestions:any[],
    tratu: any[];
} 
