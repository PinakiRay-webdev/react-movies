import React , {useEffect , useState} from 'react'

const WatchProviders = ({BASE_URL , API_KEY}) => {
    const [providers, setProviders] = useState([])

    const getProviders = async ()=>{
        try {
            const response = await fetch(`${BASE_URL}watch/providers/movie?api_key=${API_KEY}`)
            const data = await response.json();
            setProviders(data.results)
        } catch (error) {
            console.log({msg : error.message});
            
        }
    }

    useEffect(()=>{
        getProviders()
    },[])

  return (
    <div>
      <h1 className='text-white font-semibold text-2xl py-2 px-1' >Popular providers</h1>
      <div className='grid grid-cols-6 gap-2' >
        {providers.slice(0,6).map((Element , id)=>{
            return(
                <div className='w-44 h-32' >
                    <img className='w-full h-full object-fill'  key={id} src={`https://image.tmdb.org/t/p/w500/${Element.logo_path}`} alt="" />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default WatchProviders
