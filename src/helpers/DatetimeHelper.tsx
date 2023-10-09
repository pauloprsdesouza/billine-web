export function convertToPTBTDateTime(date: Date): any {
    return new Date(date).toLocaleString("pt-PT", { dateStyle: "medium" });
}