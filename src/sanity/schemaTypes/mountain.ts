 
import { defineType,defineField,defineArrayMember } from "sanity"
// sanity/pet.ts
export default defineType({
    name: 'mountain',
    type: 'document',
    title: 'Mountain',
    

    fields: [
       defineField( {
        name: 'title',
        type: 'string',
        title: 'Title'
    }),
    defineField( {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options:{
            source:'title'
        }    
    }),
    defineField( {
        name: 'summary',
        type: 'text',
        title: 'Summary'
    }),
    defineField( {
        name: 'image',
        type: 'image',
        title: 'Image'
    }),
    defineField( {
        name: 'content',
        type: 'array',
        title: 'Content',
         of:[
            defineArrayMember({
                type:'block'
            })
         ]
            
            
        
         
            
            
    }),
]
})