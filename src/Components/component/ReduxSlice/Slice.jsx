import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const ResumeSlice = createSlice({
    name:"resume",
    initialState:{
        PersonDetaile:{
            firstName:"",
            lastName:'',
            email:'',
            dateOfBirth:'',
            motherName:'',
            adders:'',
            city:'',
            gender:'',
            check:false,
        },
        Objective:{
            CareerObjective:''
        },
        skills:[],
        interst:[],
        Education:[],
        Certification:[],
        Achievements:[],
        AddmoreSection:[]
    },
    reducers:{
        personAdd(state,action){
            const inputPayload = action.payload
                state.PersonDetaile.firstName = inputPayload.firstName
                state.PersonDetaile.lastName = inputPayload.lastName
                state.PersonDetaile.email = inputPayload.email
                state.PersonDetaile.dateOfBirth = inputPayload.dateOfBirth
                state.PersonDetaile.motherName = inputPayload.motherName
                state.PersonDetaile.adders = inputPayload.adders
                state.PersonDetaile.city = inputPayload.city
                state.PersonDetaile.gender = inputPayload.gender
                state.PersonDetaile.check  = inputPayload.check
        },
        Objective(state,action){
            const inputPayload = action.payload
                state.Objective.CareerObjective = inputPayload.CareerObjective
        },
        Skills(state,action){
            const inputPayload = action.payload
            state.skills.push({
                id:nanoid(),
                PersonSkills:inputPayload.PersonSkills
            })
        },
        SkillsRemove(state,action){
            const inputPayload = action.payload

            const {id} = inputPayload

            state.skills = state.skills.filter(item => item.id !== id)

        },
        Intrest(state,action){
            const inputPayload = action.payload 
            state.interst.push({
                id:nanoid(),
                addMoreInterst:inputPayload.addMoreInterst
            })
        },
        IntrestRemove(state,action){
            const inputPayload = action.payload 
            const {id} = inputPayload
            state.interst = state.interst.filter(item => item.id !== id)
        },
        EducationAdd(state,action){
            const inputPayload = action.payload 
            state.Education.push({
                id:nanoid(),
                institute:inputPayload.institute,
                study:inputPayload.study,
                grade:inputPayload.grade,
                year:inputPayload.year
            })
        },
        CertificationAdd(state,action){
            const inputPayload = action.payload 
            state.Certification.push({
                id:nanoid(),
                heading:inputPayload.heading,
                CertificationWhere:inputPayload.CertificationWhere
            })
        },
        Addachievements(state,action){
            const inputPayload = action.payload 
            state.Achievements.push({
                id:nanoid(),
                achieve:inputPayload.achieve
            })    
        },
        AddmoreSection(state,action){
            const inputPayload = action.payload 
            state.AddmoreSection.push({
                id:nanoid(),
                headingSection:inputPayload.headingSection,
                messageSection:inputPayload.messageSection
            })
        }
    }
})

export const action = ResumeSlice.actions

export default ResumeSlice;

