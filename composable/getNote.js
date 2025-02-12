import { ref } from "vue";

const getNote = (id) => {
  const note = ref(null)
  const error = ref(null)
  const loadSingleNote = async () =>{
    try{

        // melakuakan fetch data pada API
        let data = await fetch('http://localhost:3000/notes/' + id)

        if(!data.ok){
          throw Error('Data tidak tersedia')
        }

        note.value = await data.json()
    }catch(err){
      error.value = err.message
    }

  }

  return { note, error, loadSingleNote }
}

export default getNote