import { ref } from "vue"


const getNotes  = () =>{
  const notes = ref([])
  const error = ref(null)
  const load = async()=>{

      try{
          let data = await fetch('http://localhost:3000/notes');
          if(!data.ok){
            throw Error('Data tidak ada')
          }
          notes.value = await data.json()
      }
      catch(err){
        error.value = err.message 
      }
    }
  
  return {notes, error, load}
}

export default getNotes