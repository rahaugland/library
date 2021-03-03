import { Ref } from "react";
import {ref} from "typesaurus";

type Semester ={
    id: string,
    title: string,
    courses: Ref<Course>[]
}


type Course = {
    id: string,
    title: string,
    documents: Ref<Document>[]
}

type Document = {
    id: string,
    title: string,
    autor: string,
    documentUrl: string,
}
export type {Semester, Course, Document}